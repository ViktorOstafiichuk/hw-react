import {useEffect, useState} from "react";
import {fetchServices} from "../../services/fetch.services";
import {baseURLS, urls} from "../../configs";
import {User} from "../User/User";

const Users = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetchServices(`${baseURLS}${urls.users}`, 'GET', '', setUsers);
    }, []);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/> )}
        </div>
    );
};

export {Users};
