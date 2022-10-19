// // import {useParams} from "react-router-dom";
// import {useEffect, useState} from "@types/react";
//
// const PostDetail = () => {
//     // const {id} = useParams();
//     // const [post, setPost] = useState([]);
//
//
//     // useEffect(() => {
//     //     fetch('https://jsonplaceholder.typicode.com/posts/' + id')
//     //         .then(value => value.json())
//     //         .then(value => {
//     //             setPost({...value})
//     //         })
//     // }, [id]);
//     return (
//         <div>
//             detail
//             {/*<h3>{post.title}</h3>*/}
//         </div>
//     )
// };
//
// // export {PostDetail};


import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function PostDetail() {
    const {id} = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(value => value.json())
            .then(value => setPost({...value}));
    }, [id]);

    return(
        <div>
            <h3>id: {post.id}</h3>
            <h3>title: {post.title}</h3>
            <h3>body: {post.body}</h3>
        </div>
    );
}
