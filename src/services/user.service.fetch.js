import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";
import {fetchService} from "./fetch.service";

const UserServiceFetch = {
    getAll: () => fetchService.get(urls.users),
    getById: (id)=> axiosService.get(`${urls.users}/${id}`)
};
export {
    UserServiceFetch
};
