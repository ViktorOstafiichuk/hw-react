import {useReducer, useRef} from "react";
import {Cat} from "../Cat/Cat";

const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]};
        case 'deleteCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)};
        default:
            console.error('');
            return state;

    }
}

function Cats() {

    const [state, dispatch] = useReducer(reducer, {cats: []});

    const catInput = useRef();

    const createCat = () => {
        dispatch({type: 'addCat', payload: catInput.current.value});
        catInput.current.value = '';
    }

    return (
        <div className="cat">

                <div>
                    <label>Cats name: <input type="text" ref={catInput}/></label>
                    <button onClick={createCat}>Save Cat</button>
                </div>
                {
                    state.cats.map(cat => (<Cat key={cat.id} dispatch={dispatch} cat={cat}/>))


                }
        </div>
    );
}

export default Cats;
