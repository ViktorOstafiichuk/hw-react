import {useState} from "react";

const User = ({user, lift, lift2}) => {

let{id, name, username} = user;

let [userDet, setUserDet] = useState(null);

function userDetail(us) {
    setUserDet(us);
}

    function userDetail2(us) {
        if (userDet === us) {
            setUserDet(null);
        } else {
            setUserDet(us);
        }
    }

    return (
        <div>
            <h2>{id} - {name}</h2>
            <h3>{username}</h3>
            {userDet && <h3>{JSON.stringify(userDet)}</h3>}
            <button onClick={()=>{lift(user)}}>click</button>
            <button onClick={()=>{lift(null)}}>clear</button>


            <button onClick={()=> userDetail(user)}>click2</button>
            <button onClick={()=> userDetail(null)}>clear2</button>

            <button onClick={()=> {lift2(user)}}>click3</button>

            <button onClick={()=> userDetail2(user)}>click4</button>



        </div>
    )
};

export {User};
