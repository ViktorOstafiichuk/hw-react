import {set, useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';

import {carValidator} from "../../validators";
import {userService} from "../../services/user.service";
import {useEffect} from "react";

const CarForm = ({setUser, userForUpdate, setUserForUpdate}) => {
    const {
        register, handleSubmit, reset, formState: {errors, isValid}, setValue
    } = useForm({
        resolver: joiResolver(carValidator),
        mode: 'all'
    });

    useEffect(() => {
        if (userForUpdate) {
            setValue('model', userForUpdate.model, {shouldValidate: true});
            setValue('price', userForUpdate.price, {shouldValidate: true});
            setValue('year', userForUpdate.year, {shouldValidate: true});
        }
    }, [userForUpdate, setValue]);

    const submit = async (car) => {

        if (userForUpdate) {
            const {data} = await userService.updateById(userForUpdate.id, car);
            setUser((cars) => {
                const findCar = cars.find(value => value.id === userForUpdate.id);
                Object.assign(findCar, data);
                setUserForUpdate(null);
                return [...cars]
            })
        } else {
            const {data} = await userService.create(car);
            setUser(users => [...users, data]);
        }

        reset()
    };

    return (


        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>





            <input type="text" placeholder={'model'} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type="text"
                   placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text"
                   placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button
                disabled={!isValid}>{userForUpdate ? 'Update' : 'Save'}</button>
        </form>);
};

export {CarForm};
