import {CarForm, Cars} from "../../components";
import {useEffect, useState} from "react";

import {carService} from "../../services";

const CarsPage = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data: res}) => {
            setCars(res.data)
        });
    }, [])
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsPage};
