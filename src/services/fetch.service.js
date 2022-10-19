import {baseURL} from "../configs/urls";

const fetchService = fetch(baseURL)
    .then(value => value.json());

export {fetchService};
