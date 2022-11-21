import {useNavigate} from "react-router-dom";

import css from './Post.module.css';

const Post = ({post}) => {
    const {id, title} = post;

    let navigate = useNavigate();

    return (
        <div className={css.post}>
            {id} -- {title}
            <button onClick={()=>navigate(`${id}`, {state:{...post}})}>PostDetails</button>
        </div>
    );
};

export {Post};
