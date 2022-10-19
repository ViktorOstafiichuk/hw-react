import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;

    return (
        <div>
            {id} - {name}
            <div>
                <Link to={'/users/' + user.id} state={{...user}}>details</Link>
            </div>
            <div>
                <Link to={'/users/v2/' + user.id}>detailsV2</Link>
            </div>
        </div>
    );
};

export {User};
