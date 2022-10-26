import {carService} from "../../services";

const Car = ({car, setCars}) => {
    const {id, model, price, year, photo} = car;
    const sendPhoto = async (e) => {
        const formData = new FormData();
        const [file] = e.target.files;
        formData.append('photo', file)
        const {data} = await carService.addPhotoById(id, formData);
        setCars(cars => {
            const find = cars.find(car => car.id === id);
            Object.assign(find, {...data, photo: URL.createObjectURL(file)})
            return [...cars]
        })
    }

    return (
        <div>
            <h3>id:{id}</h3>
            <h3>model:{model}</h3>
            <h3>price:{price}</h3>
            <h3>year:{year}</h3>
            {photo?
                    <img src={photo} alt={model}/>
            :
                <input type="file" onChange={sendPhoto}/>
            }
        </div>
    );
};

export {Car};
