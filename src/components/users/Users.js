import {useEffect, useState} from "react";
import {urls} from "../../configs/urls";
import {User} from "../user/User";
import {fetchServices} from "../../services/fetch.services";

const Users = () => {
        let [users, setUsers] = useState([]);
        let [user, setUser] = useState(null);

        function lift(user){
            setUser(user)
        }

        function lift2(user2){
            if (user2 === user){
                setUser(null);
            } else {
                setUser(user2);
            }
        }

useEffect(() => {
    fetchServices(urls.users)
        .then(value => setUsers(value));
}, [])

    return (
        <div>
            <hr/>

                {
                    user && <div>{JSON.stringify(user)}</div>
                }

            <hr/>
            {users.map(user => <User key={user.id} user={user} lift={lift} lift2={lift2}/>)
            }
        </div>
    )
};

export {Users};
