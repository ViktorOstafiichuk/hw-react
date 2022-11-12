import {useEffect, useState} from "react";
import {fetchServices} from "../../services/fetch.services";
import {Outlet} from "react-router-dom";

import {Post} from "../Post/Post";

const Posts = () => {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchServices('https://jsonplaceholder.typicode.com/posts', 'GET', '', setPosts);
    }, []);

    return (
        <div>
            <Outlet/>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
};

export {Posts};
