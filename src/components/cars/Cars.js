import {Car} from "../car/Car";

const Cars = ({cars, setCars, setCarsForUpdate}) => {

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCars={setCars} setCarsForUpdate={setCarsForUpdate}/>)}
        </div>
    );
};

export {Cars};
