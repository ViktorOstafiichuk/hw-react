const fetchServices = (url, method, data, set) => {

    if (method === 'GET') {
        fetch(`${url}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            }
        },)
            .then(value => value.json())
            .then(value => set(value))

    }

}


export {fetchServices};

