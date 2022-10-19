import {useLocation} from "react-router-dom";

const UserDetails = () => {
const {state} = useLocation();
let{id, name} = state;
    console.log(state);

    return (
        <div>
            <h3>{id} - {name}</h3>
        </div>
    )
};

export {UserDetails};
