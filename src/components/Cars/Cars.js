import {useEffect, useState} from "react";
import {fetchServices} from "../../services/fetch.services";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {
    let [cars, setCars] = useState([]);
    let [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        fetchServices('https://owu.linkpc.net/api/v2/cars', 'GET', '', setCars);
    }, [])
    return (
        <div>
            {<CarForm setCars={setCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>}
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} setCars={setCars} setCarForUpdate={setCarForUpdate}/>)}

        </div>
    )
};

export {Cars};
