import Rickandmorty from "./rickandmorty";
import {useState} from "react";

export default function Rickandmortys () {
    let [rickandmortys, setRickandmortys] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setRickandmortys(value.results.slice(0,6));
        })



    return (
        <div className={'wrap'}>
            {rickandmortys.map((rickandmortys, index) => <Rickandmorty key={index} item={rickandmortys}/>)}
        </div>
    );
}
