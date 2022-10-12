import {useEffect, useState} from "react";

import {CarForm} from "../CarForm/CarForm";
import {userService} from "../../services/user.service";
import {Car} from "../Car/Car";

const Cars = () => {
const [users, setUsers] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null);

useEffect(() => {
    userService.getAll().then(({data}) => setUsers(data))
},[]);
    return (
        <div>
            <CarForm setCars={setUsers} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            {users.map(user => <Car key={user.id} user={user} setUsers={setUsers} setCarForUpdate={setCarForUpdate}/> )}
        </div>
    );
};

export {Cars};
