export default function User(props) {
    let {user, lift} = props;
    return (
        <div className={'userName'}>
            <h1>{user['id']} -- {user['name']}</h1>

            <button onClick={() => {lift(user)}}>details</button>
        </div>
    )

}
