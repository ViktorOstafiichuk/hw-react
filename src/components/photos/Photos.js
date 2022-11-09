import {useEffect, useState} from "react";
import {urls} from "../../configs/urls";
import {fetchServices} from "../../services/fetch.services";
import {Photo} from "../photo/Photo";

const Photos = () => {
    let [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetchServices(urls.photos)
            .then(value => {
                setPhotos(value.splice(0,10))
            })
    }, []);
    // FetchServices(urls.photos, setPhotos, `${urls.album}1`);

    return (
        <div>
            {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
        </div>
    )
};

export {Photos};
