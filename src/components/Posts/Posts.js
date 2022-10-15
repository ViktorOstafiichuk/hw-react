import {Post} from "../Post/Post";
// import {PostForm} from "../postForm";


const Posts = ({posts}) => {

    return (
<div>
    {/*<div> <PostForm setUsers={setPosts}/></div>*/}
    <div>
        {posts.map(post => <Post key={post.id} post={post}/>)}
    </div>
</div>
    )
};

export {
    Posts
};
