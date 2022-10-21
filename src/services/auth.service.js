import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const authService = {
    register: (user) => axiosServices.post(urls.users, user),
    login: (user) => axiosServices.post(urls.auth.login, user),
    refresh: (token)=> axiosServices.post(urls.auth.refresh, {token})
}

export {authService};
