import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {Comment} from "../comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    });
    return (
        <div>
            <Outlet/>
            {comments.map(comment => <Comment key={comment.id}
                                              comment={comment}/>)}
        </div>
    )
};

export {Comments};
