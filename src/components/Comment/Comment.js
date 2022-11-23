const Comment = ({comment}) => {

    const {postId, id, name} = comment;
    return (
        <div>
            {postId} - {id} - {name}
        </div>
    );
};

export {Comment};
