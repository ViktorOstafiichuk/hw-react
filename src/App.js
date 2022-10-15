import './App.css';
import {useState} from "react";

import {Users} from "./components";
import {Posts} from "./components";
import {postService} from "./services";


function App() {
    const [posts, setPosts] = useState([]);
    const getUserId = (userId) => {
        postService.getPost(userId).then(({data}) => setPosts(data))
    }


    return (
        <div className="App">
            <Users getUserId={getUserId}/>
            <Posts posts={posts}/>
        </div>
    );
}

export default App;
