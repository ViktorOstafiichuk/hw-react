import {fetchServices} from "../../services/fetch.services";

const Car = ({car, setCars, setCarForUpdate}) => {

    const deleteCar = async () => {
await fetchServices(`https://owu.linkpc.net/api/v2/cars/${car.id}`, 'DELETE', car.id, setCars)
        setCars(car => {
            const index = car.findIndex(value => value.id === id);
            car.splice(index, 1);
            return [...car];
        })
    }

    const {id, model, price, year} = car;
    return (
        <div>
            <h3>{id}</h3>
            <h3>{model}</h3>
            <h3>{price}</h3>
            <h3>{year}</h3>

            <button onClick={() => setCarForUpdate(car)}>update</button>
            <button onClick={() => deleteCar()}>delete</button>
            <hr/>
        </div>
    )
};

export {Car};
