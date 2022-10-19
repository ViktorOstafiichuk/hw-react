import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postServiceAxios} from "../../services";
import {Post} from "../post/Post";

const Posts = () => {
    let [posts, setPosts] = useState([]);
    // let {id} = useParams();
    useEffect(() => {
        postServiceAxios.getAll().then(({data}) => {
            setPosts(data)
        })
    })

    return (
        <div>
        <Outlet/>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
};

export {Posts};
