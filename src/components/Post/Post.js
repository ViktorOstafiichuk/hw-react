import {Link} from "react-router-dom";
import {useState} from "react";

import css from './Post.module.css';

const Post = ({post}) => {
    const {id, title} = post;

    let [postDetail, setPostDetail] = useState(null);
    const postDet = () => {
        if (postDetail) {
            setPostDetail(null);
        } else {
            setPostDetail(post)
        }
    };



    return (

        <div>
            <Link to={`/posts/${id}`}>{id} - {title}</Link>

            <h2 onClick={() => {
                postDet()
            }} className={css.postDet}>{id} - {title}</h2>
            <hr/>
            {postDetail &&
                <h1 className={css.detail}>{postDetail.id} - {postDetail.title}</h1>}
            {postDetail &&
                <span className={css.detail}>{postDetail.body}</span>}
        </div>
    );
};

export {Post};
