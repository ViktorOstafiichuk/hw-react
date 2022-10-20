import './App.css';
import {
    Routes,
    Route,
    Link,
} from "react-router-dom";
import {Albums, Comments, Posts, Todos} from "./components";
import Home from "./components/home/Home";


function App() {
    return (
        <div className="App">
            <div className='header'>
                <h3><Link to={'/'}>home</Link></h3>
                <h3><Link to={'/todos'}>todos</Link></h3>
                <h3><Link to={'/albums'}>albums </Link></h3>
                <h3><Link to={'/comments'}>comments  </Link></h3>
            </div>

            <hr/>

            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/todos'} element={<Todos/>}/>
                <Route path={'/albums'} element={<Albums/>}/>
                <Route path={'/comments'} element={<Comments/>}>
                    <Route path={':postId'} element={<Posts/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
