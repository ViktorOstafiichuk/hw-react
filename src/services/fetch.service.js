import {baseURL} from "../configs/urls";

const fetchService = (url) => {
    return fetch(`${baseURL}${url}`)
        .then(value => value.json())
};

export {fetchService};
