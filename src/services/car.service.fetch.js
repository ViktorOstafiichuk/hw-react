import {baseURL, urls} from "../configs/urls";

const carServicePost = (car) => {
    return fetch(`${baseURL}${urls.cars}`, {
        method: 'POST',
        headers:{'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(car)
    }).then(value => value.json())
};

const carServiceDelete = (id) => {
    return fetch(`${baseURL}${urls.cars}/${id}`, {
        method: 'DELETE',
        headers:{'Content-Type': 'application/json;charset=utf-8'}
    })
}

const carServiceUpdate = (id, car) => {
    return fetch(`${baseURL}${urls.cars}/${id}`, {
        method: 'PUT',
        headers:{'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(car)
    }).then(value => value.json())
}
export {carServicePost, carServiceDelete, carServiceUpdate};
