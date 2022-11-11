import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            {id} - {name}

            <div>
                <Link to={'/users/' + user.id}>details</Link>
            </div>
        </div>
    )
};

export {User}
