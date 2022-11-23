const fetchServices = (url, method, data, set) => {

    if (method === 'GET') {
        fetch(`${url}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(value => value.json())
            .then(value => set(value))

    }

    if (method === 'POST') {
        fetch(`${url}`, {
            method: method,
            headers:
                {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(data)

        })
            .then(value => value.json())
            .then(value => set(info => [...info, value]))

    }

    if (method === 'PUT') {
      return   fetch(`${url}`, {
            method: method,
            headers:
                {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(data)
        }).then(value => value.json())


    }

    if (method === 'DELETE') {
        return fetch(`${url}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            }
        })

    }


};


export {fetchServices};
