import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";


export default function UserDetailV2() {
    let {id} = useParams();
    const [user, setUser] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/'  + id)
            .then(value => value.json())
            .then(value => {
                setUser({...value})
            });
    }, [id]);

    // useEffect(()=> {
    //     UserServiceFetch.getById(id).then(({data})=>{setUser(data)})
    // },[])

    return (
        <div>
            <h3>{user.id} - {user.name}</h3>
            <h4>username: {user.username} email: {user.email}</h4>
        </div>
    )
};
