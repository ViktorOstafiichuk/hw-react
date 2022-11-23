import {useEffect, useState} from "react";
import {fetchServices} from "../../services/fetch.services";
import {User} from "../User/User";

const Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetchServices(`https://jsonplaceholder.typicode.com/users`, 'GET', '', setUsers);
    }, []);
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};
