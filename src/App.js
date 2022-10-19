import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
import {Albums, Comments, Todos} from "./components";
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
                <Route path={'/comments'} element={<Comments/>}/>

            </Routes>
        </div>
    );
}

export default App;
