import './App.css';
import {
    Routes,
    Route,
    Link,
} from "react-router-dom";
// import {Albums, Comments, Posts, Todos} from "./components";
// import Home from "./components/home/Home";
// import {Users} from "./components/Users/Users";
import {Cars} from "./components/Cars/Cars";
import {Home} from "./components/Home/Home";
import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";
import {UserDetails} from "./components/UserDetails/UserDetails";
// import {Albums} from "./components/Albums/Albums";


function App() {
    return (
        <div className="App">
            {/*<div className='header'>*/}
            {/*    <h3><Link to={'/'}>home</Link></h3>*/}
            {/*    <h3><Link to={'/todos'}>todos</Link></h3>*/}
            {/*    <h3><Link to={'/albums'}>albums </Link></h3>*/}
            {/*    <h3><Link to={'/comments'}>comments  </Link></h3>*/}
            {/*</div>*/}

            {/*<hr/>*/}

            {/*<Routes>*/}
            {/*    <Route path={'/'} element={<Home/>}/>*/}
            {/*    <Route path={'/todos'} element={<Todos/>}/>*/}
            {/*    <Route path={'/albums'} element={<Albums/>}/>*/}
            {/*    <Route path={'/comments'} element={<Comments/>}>*/}
            {/*        <Route path={':postId'} element={<Posts/>}/>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}


            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/users'}>user</Link></li>
                <li><Link to={'/posts'}>posts</Link></li>
                <li><Link to={'/cars'}>cars</Link></li>
            </ul>

            <hr/>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'/users'} element={<Users/>}></Route>
                <Route path={'/users/:id'} element={<UserDetails/>}></Route>
                <Route path={'/posts'} element={<Posts/>}></Route>
                <Route path={'/cars'} element={<Cars/>}></Route>
            </Routes>
            {/*<Cars/>*/}

            {/*<Users/>*/}
            {/*<Albums/>*/}
        </div>
    );
}

export default App;
