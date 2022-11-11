import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchServices} from "../../services/fetch.services";

const UserDetails = () => {
    let params = useParams();

    let [userDetail, setUserDetail] = useState([]);
    const {id, name}= userDetail;
    useEffect(() => {
        fetchServices('https://jsonplaceholder.typicode.com/users/' + params.id, 'GET', '', setUserDetail);
    }, []);
    return (
        <div>
            {id} - {name}
        </div>
    );
};

export {UserDetails};
