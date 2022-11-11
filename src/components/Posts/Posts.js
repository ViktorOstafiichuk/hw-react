import {useEffect, useState} from "react";
import {fetchServices} from "../../services/fetch.services";
import {Post} from "../Post/Post";

const Posts = () => {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchServices('https://jsonplaceholder.typicode.com/posts', 'GET', '', setPosts);
    }, []);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
};

export {Posts};
