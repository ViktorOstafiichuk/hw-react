import {baseURL} from "../configs";

const fetchService =() => fetch(baseURL)
    .then(value => value.json())

export {fetchService};
