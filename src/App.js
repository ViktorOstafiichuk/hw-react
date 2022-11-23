import './App.css';

import {Route, Routes} from 'react-router-dom';
import {MainLayout} from "./layouts/mainLayout";
import {Posts, Users} from "./components/main";
import {Home} from "./components/Home/Home";
import {Comments} from "./components/Comments/Comments";


function App() {
    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'users'} element={<Users/>}/>
                    {/*<Route path={'posts'} element={<Posts/>}/>*/}
                    <Route path={'posts'} element={<Posts/>}>
                        <Route path={':id'} element={<Comments/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
