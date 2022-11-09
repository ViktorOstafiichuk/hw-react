import {useEffect, useState} from "react";

import {Car} from "../Car/Car";
import {fetchService} from "../../services/fetch.service";
import {urls} from "../../configs/urls";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {
const [cars, setCars] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null);

useEffect(() => {
    fetchService(urls.cars).then(value => setCars(value))
},[]);
    return (
        <div>
            <CarForm setCars={setCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} setCars={setCars} setCarForUpdate={setCarForUpdate}/> )}
        </div>
    );
};

export {Cars};
