const PostDetail = ({post}) => {
    const {id, title, body} = post;

    return (
        <div>
            <h3>{id} -- {title}</h3>
            <h3>{body}</h3>
        </div>
    );
};

export {PostDetail};
