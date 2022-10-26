import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const carService = {
    getAll: (page=1) => axiosServices.get(urls.cars, {params:{page}}),
    create: (car) => axiosServices.post(urls.cars, car),
    addPhotoById: (id, data) => axiosServices.patch(`${urls.cars}/${id}`, data),
    getById: (id)=> axiosServices.get(`${urls.cars}/${id}`),
    updateById: (id, car)=> axiosServices.put(`${urls.cars}/${id}`, car),
    deleteById: (id)=> axiosServices.delete(`${urls.cars}/${id}`)
};

export {carService};
