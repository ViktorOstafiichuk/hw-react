import {useEffect, useState} from "react";
import Ship from "./ship-launch";

export default function Ships() {
    let [ships, setShips] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                let filterShipYear = value.filter(value => value['launch_year'] !== '2020');
                setShips(filterShipYear);
            });
    });



    return (
        <div className='wrap'>
            {ships.map((ship, index) => <Ship key={index} ship={ship}/>)}
        </div>
    );
};
