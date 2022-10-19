import {Link, useNavigate} from "react-router-dom";

const Post = ({post}) => {
    let navigate = useNavigate();
    return (
        <div>
            {/*<h3><Link to={`/posts/${post.id}`}>{post.title}</Link></h3>*/}
            {<button onClick={()=> {
                navigate(post.id.toString());
            }}>{post.title}</button>}
        </div>
    )
};

export {Post};
