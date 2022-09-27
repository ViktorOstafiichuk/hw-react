export default function User(props){
    let {users} = props;
    return (
        <div>
            {users.name}
        </div>
    );
}
