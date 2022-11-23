import {NavLink} from "react-router-dom";

const Post = ({post}) => {

    const {id, title} = post;
    return (
        <div>
            <NavLink to={`${id}`}>{id} - {title}</NavLink>
        </div>
    );
};

export {Post};
