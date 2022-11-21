import {PostDetail} from "../../components";
import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchServices} from "../../services/fetch.services";
import {baseURLS, urls} from "../../configs";

const PostDetailPage = () => {
    const {state} = useLocation();
    const [post, setPost] = useState(state);
    const {id} = useParams();

    useEffect(() => {
        if (!state) {
            fetchServices(`${baseURLS}${urls.posts}/${id}`, 'GET', '', setPost);
        } else {
            setPost(state);
        }

    }, [id, state]);
    return (
        <div>
            {post && <PostDetail key={post.id} post={post}/>}
        </div>
    );
};

export {PostDetailPage};
