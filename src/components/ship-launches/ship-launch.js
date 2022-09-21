export default function Ship(props) {
    let {ship} = props;

    return (
        <div className='ship'>
    <div>{ship['launch_year']}</div>
    <div>{ship['mission_name']}</div>
            <img src={ship['links']['mission_patch']} alt={ship['mission_name']}/>
        </div>
    );
}
