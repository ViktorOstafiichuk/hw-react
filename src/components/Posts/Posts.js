import {useEffect, useState} from "react";

import {fetchServices} from "../../services/fetch.services";
import {baseURLS, urls} from "../../configs";
import {Post} from "../Post/Post";

const Posts = () => {
let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchServices(`${baseURLS}${urls.posts}`, 'GET', '', setPosts);
    }, []);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
