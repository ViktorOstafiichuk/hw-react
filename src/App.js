import {Route, Routes, Navigate} from 'react-router-dom';


import './App.css';
import {MainLayout} from "./layouts/MainLayout/mainLayout";
import {
    HomePage,
    UsersPage,
    PostPage,
    AboutPage,
    NotFoundPage
} from "./pages/main";
import {PostDetailPage} from "./pages/PostDetailPage/PostDetailPage";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostPage/>}>
                    <Route path={':id'} element={<PostDetailPage/>}/>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>

        </Routes>
    );
}

export default App;
