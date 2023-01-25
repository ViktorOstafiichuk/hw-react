import {useReducer, useRef} from "react";
import {Dog} from "../Dog/Dog";

const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'addDog':
            return {...state, dogs: [...state.dogs, {name: payload, id: Date.now()}]};
        case 'deleteDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)};
        default:
            console.error('');
            return state;

    }
}

function Dogs() {

    const [state, dispatch] = useReducer(reducer, {dogs: []});

    const dogInput = useRef();

    const createDog = () => {
        dispatch({type: 'addDog', payload: dogInput.current.value});
        dogInput.current.value = '';
    }

    return (
        <div className="dog">
                            <div>
                    <label>Dogs name: <input type="text" ref={dogInput}/></label>
                    <button onClick={createDog}>Save Dog</button>
                </div>
                {
                    state.dogs.map(dog => (<Dog key={dog.id} dispatch={dispatch} dog={dog}/>))
                }
        </div>
    );
}

export default Dogs;
