const User = ({user, getUserId}) => {

    return (
        <div>
            <h3>{user.id} --- {user.name} {user.surname}</h3>
            <h4>{user.email}</h4>
            <button onClick={()=> getUserId(user.id)}>click</button>
        </div>
    )
};

export {
    User
};
