import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';
import {carValidator} from "../../validator/car.validator";
import {fetchServices} from "../../services/fetch.services";
import {useEffect} from "react";


const CarForm = ({setCars, setCarForUpdate, carForUpdate}) => {
    let {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid},
        setValue
    } = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const submit = async (car) => {
        if (carForUpdate) {
            await fetchServices(`https://owu.linkpc.net/api/v2/cars/${carForUpdate.id}`, 'PUT', car).then(value => setCars((cars => {
                let find = cars.find(value => value.id === carForUpdate.id);
                Object.assign(find, value)
                setCarForUpdate(null);
                return [...cars]
            })))
        }

        await fetchServices('https://owu.linkpc.net/api/v2/cars', 'POST', car, setCars)
        reset()
    };

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [setCarForUpdate, carForUpdate])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button
                disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    )
};

export {CarForm};
