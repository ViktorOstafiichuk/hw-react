import {fetchService} from "./fetch.service";
import {urls} from "../configs";

const TodosService = {
    // getAll: () => fetchService.get(`${urls['todos']}`)
    getAll: () => fetchService.get('https://jsonplaceholder.typicode.com/todos')
};

export {TodosService};
