import './App.css';
import {useReducer, useRef} from "react";

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

function App() {

  const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

  const catInput = useRef();

  const createCat = () => {
    dispatch({type: 'addCat', payload: catInput.current.value});
    catInput.current.value = '';
  }

  return (
    <div className="main">
<div className='cats'>
  <div>
    <label>Cats name: <input type="text" ref={catInput}/></label>
    <button onClick={createCat}>Save Cat</button>
  </div>
  {
    state.cats.map(cat => (<div key={cat.id}>
      {cat.name}
      <button onClick={() => dispatch({type: 'deleteCat', payload: cat.id}) }>delete Cat</button>
    </div>))
  }
</div>
    </div>
  );
}

export default App;
