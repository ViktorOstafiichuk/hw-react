import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";

import css from './CarForm.module.css';
import {
    carServicePost,
    carServiceUpdate
} from "../../services/car.service.fetch";
import {useEffect} from "react";


const CarForm = ({setCars, carForUpdate, setCarForUpdate}) => {
    let {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid},
        setValue
    } = useForm({resolver: joiResolver(carValidator), mode: 'all'});

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue]);

    // useEffect(() => {
    //     setValue('model', 'opel')
    //     setValue('price', '9999')
    //     setValue('year', '1996')
    // }, [])

    const submit = async (car) => {
        if (carForUpdate){
await carServiceUpdate(carForUpdate.id, car).then(value => setCars((cars => {
    let find = cars.find(value => value.id === carForUpdate.id);
    Object.assign(find, value)
    setCarForUpdate(null);
    return [...cars]
})))
        }

        await carServicePost(car)
            .then(value =>
                setCars(cars => [...cars, value]))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)} className={css.CarForm}>

            {/* не елегантний варіант імпутів з валідатором */}
            {/*<div className={css.input}>*/}
            {/*    <input type="text" placeholder={'model'} {...register('model', {*/}
            {/*        required: true,*/}
            {/*        minLength: {value: 2, message: 'мінімум 2 букви'}*/}
            {/*    })}/>*/}
            {/*    {errors.model && <span>{errors.model.message}</span>}*/}
            {/*</div>*/}

            {/*<div className={css.input}>*/}
            {/*    <input type="text"*/}
            {/*           placeholder={'price'} {...register('price', {valueAsNumber: true, required: true})}/>*/}
            {/*</div>*/}
            {/*<div className={css.input}>*/}
            {/*    <input type="text"*/}
            {/*           placeholder={'year'} {...register('year', {valueAsNumber: true})}/>*/}

            {/*</div>*/}

            {/* Елегантний варіант імпутів з валідатором */}
            <div className={css.input}>
                <input type="text"
                       placeholder={'model'} {...register('model')}/>
                {errors.model && <span>{errors.model.message}</span>}
            </div>

            <div className={css.input}>
                <input type="text"
                       placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                {errors.price && <span>{errors.price.message}</span>}
            </div>
            <div className={css.input}>
                <input type="text"
                       placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                {errors.year && <span>{errors.year.message}</span>}
            </div>
            <button disabled={!isValid}>{carForUpdate?'Update':'Save'}</button>
        </form>
    );
};

export {CarForm};
