import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const carService = {
    getAll: (page=1) => axiosServices.get(urls.cars, {params:{page}}),
    create: (car) => axiosServices.post(urls.cars, car),
    addPhotoById: (id, data) => axiosServices.patch(`${urls.cars}/${id}`, data)
};

export {carService};
