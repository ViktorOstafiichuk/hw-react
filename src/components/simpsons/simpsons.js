import {simpsons} from "./data";
import Simpson from "./simpson";

export default function Simpsons() {

    return (
        <div>
            {simpsons.map((simpson, index) => <Simpson simpson={simpson} key={index}/>)}

        </div>
    );
}
