import {User} from "../User/User";
import {baseURL, urls} from "../../config/urls";
import {fetchServices} from "../../services/fetch.services";
import {useEffect, useState} from "react";

const Users = () => {

    let [users, setUsers] = useState([]);

useEffect(()=> {
    fetchServices(`${baseURL}${urls.users}`, 'GET', '' , setUsers);
},[]);


    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>) }
        </div>
    )
};

export {Users};
