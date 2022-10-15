import {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "../User/User";
import {UserForm} from "../userForm";

const Users = ({getUserId}) => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            <div><UserForm setUsers={setUsers}/></div>

            <div>
                {users.map(user => <User key={user.id} user={user} getUserId={getUserId}/>)}
            </div>
        </div>
    )
};

export {
    Users
};
