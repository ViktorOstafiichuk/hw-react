import {
    DEC,
    INC,
    RESET,
    SET,
    useCount2Reducer
} from "../../reduces";

const Count2 = () => {
    const [state, dispatch] = useCount2Reducer();


    return (
        <div>
            <h1>Count2: {state.count2}</h1>
            <button onClick={() => dispatch({type:INC})}>INC</button>
            <button onClick={() => dispatch({type:DEC})}>DEC</button>
            <button onClick={() => dispatch({type:RESET})}>RESET</button>
            <button onClick={() => dispatch({type:SET, payload:23})}>SET</button>
        </div>
    )
};

export {Count2};
