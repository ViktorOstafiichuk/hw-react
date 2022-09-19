export default function Rickandmorty (props) {
    let {item} = props;

    return (
        <div className={'box'}>
            <h1>{item.id} -- {item.name}</h1>
            <ol>
                <li>{item.status}</li>
                <li>{item.species}</li>
                <li>{item['gender']}</li>
            </ol>
            <img src={item.image} alt={item.name}/>
        </div>
    );
}
