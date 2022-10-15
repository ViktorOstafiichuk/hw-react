import css from './Car.module.css';
import {carService} from "../../services/car.service";

const Car = ({car, setCars, setCarsForUpdate}) => {
    const {id, model, price, year} = car;
    const deleteCar = async () => {
        await carService.deleteById(id);
        setCars(car => {
            const index = car.findIndex(value => value.id === id);
            car.splice(index, 1);
            console.log([...car]);
            return [...car];
        });
    };

    return (
        <div className={css.Car}>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <div className={css.tools}>
                <button onClick={() => setCarsForUpdate(car)}>Update</button>
                <button onClick={() => deleteCar()}>Delete</button>
            </div>
        </div>
    );
};

export {Car};
