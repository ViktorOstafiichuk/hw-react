import {useEffect, useState} from "react";
import {Outlet} from 'react-router-dom';

import css from './postsComment.module.css';
import {fetchServices} from "../../services/fetch.services";
import {Post} from "../Post/Post";

const Posts = () => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchServices('https://jsonplaceholder.typicode.com/posts', 'GET', '', setPosts);
    }, []);
    return (
        <div className={css.postsComment}>
            <h3>{posts.map(post => <Post key={post.id} post={post}/>)}</h3>
            <h2><Outlet/></h2>
        </div>
    );
};

export {Posts};
