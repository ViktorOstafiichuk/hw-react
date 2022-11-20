import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchServices} from "../../services/fetch.services";

const PostDetail = () => {
    let params = useParams();

    let [postDetail, setPostDetail] = useState([]);

    useEffect(() => {
        fetchServices('https://jsonplaceholder.typicode.com/posts/' + params.id, 'GET', '', setPostDetail);
    },[params]);
    return (
        <div>
            {postDetail.id} - {postDetail.title}
        </div>
    );
};

export {PostDetail};
