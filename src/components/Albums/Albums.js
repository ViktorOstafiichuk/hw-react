// import {useEffect, useState} from "react";
// import {fetchServices} from "../../services/fetch.services";
// import {baseURL, urls} from "../../config/urls";
// import {Album} from "../Album/Album";
//
// const Albums = () => {
//     let [albums, setAlbums] = useState([]);
//
//     useEffect(() => {
//         fetchServices(`${baseURL}${urls.albums}`, 'GET', '', setAlbums);
//     }, [])
//
//     return (
//         <div>
//             {albums.map(album => <Album key={album.id} album={album}/>)}
//         </div>
//     )
// };
//
// export {Albums};
