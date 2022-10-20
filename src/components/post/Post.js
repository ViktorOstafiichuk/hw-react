const Post = ({post}) => {
    return (
        <div>
            <h3>{post.id} {post.title}</h3>
            <h2>{post.body}</h2>
        </div>
    )
};

export {Post};
