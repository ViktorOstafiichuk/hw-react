import {baseURL} from "../configs/urls";

const fetchServices = (url) => {
    return fetch(`${baseURL}${url}`)
            .then(value => value.json())
}

export {fetchServices};
