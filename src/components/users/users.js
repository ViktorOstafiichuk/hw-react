import {useEffect, useState} from "react";
import User from "./user";
import UserDetail from "./User-detail";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    const lift = (userDetail) => {
        setUser(userDetail);
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            });
    }, []);

    return (
        <div className='wrap'>
            <div className='usersName'>
            {users.map((user, index) => <User key={index} user={user} lift={lift}/>)}
            </div>
            <div className='usersDetail'>
                {user && <UserDetail key={user['id']} userDetail={user}/>}
                {/*{user ? <div>true</div> : <div>false</div>}*/}
            </div>
        </div>
    )
};
