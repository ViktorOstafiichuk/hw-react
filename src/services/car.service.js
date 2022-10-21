import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const carService = {
    getAll: () => axiosServices.get(urls.cars),
    create: (car) => axiosServices.post(urls.cars, car),
    addPhotoById: (id, data) => axiosServices.patch(`${urls.cars}/${id}`, data)
};

export {carService};
