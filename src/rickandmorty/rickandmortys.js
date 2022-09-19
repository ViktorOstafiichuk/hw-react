import Rickandmorty from "./rickandmorty";
import {useState} from "react";

export default function Rickandmortys () {
    let [rickandmortys, setRickandmortys] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setRickandmortys(value.results);
        })



    return (
        <div className={'wrap'}>
            {rickandmortys.map((rickandmortys, index) => <Rickandmorty key={index} item={rickandmortys}/>)}
        </div>
    );
}
