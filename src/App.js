import './App.css';
import {
    // BrowserRouter,
    Routes,
    Route,
    Link,
    // Outlet
} from "react-router-dom";

import {Users, Home, Posts, UserDetails} from "./components";
import UserDetailV2 from "./components/userDetailV2/UserDetailV2";
import PostDetail from "./components/posts/postDetail/PostDetail";

function App() {
  return (
    <div className="App">
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/users'}>Users</Link></li>
            <li><Link to={'/posts'}>Posts</Link></li>
        </ul>

        <hr/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'users'} element={<Users/>}/>
            <Route path={'users/:id'} element={<UserDetails/>}/>
            <Route path={'users/v2/:id'} element={<UserDetailV2/>}/>
            <Route path={'posts'} element={<Posts/>}>
                <Route path={':id'} element={<PostDetail/>}/>
            </Route>
        </Routes>
        <hr/>

      {/*<Users/>*/}
    </div>
  );
}

export default App;
