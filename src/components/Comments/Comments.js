import {useEffect, useState} from "react";
import {fetchServices} from "../../services/fetch.services";
import {Comment} from "../Comment/Comment";
import {useParams} from "react-router-dom";

const Comments = () => {
    let [comments, setComments] = useState([]);

    let {id} = useParams();

    useEffect(() => {
        fetchServices(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, 'GET', '', setComments);
    }, [id]);
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};
