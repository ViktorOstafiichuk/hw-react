import css from './Car.module.css';
import {carServiceDelete} from "../../services/car.service.fetch";


const Car = ({car, setCars, setCarForUpdate}) => {
    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await carServiceDelete(id);
        setCars(car => {
            const index = car.findIndex(value => value.id === id);
            car.splice(index, 1);
            return [...car];
        })
    }

    return (
        <div className={css.Car}>
            <div>
                <div>id: {id}</div>
                <div>model: {model}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
            </div>
            <div className={css.tools}>
                <button onClick={()=> {setCarForUpdate(car)}}>Update</button>
                <button onClick={() => {deleteCar()}}>Delete
                </button>
            </div>
        </div>
    );
};

export {Car};
