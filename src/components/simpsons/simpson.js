export default function Simpson(props) {
let {simpson} = props;

    return (
    <div>
        <h1>{simpson['name']} - {simpson['surname']}</h1>
        <h2>age -- {simpson.age}</h2>
        <p>{simpson['info']}</p>
        <img src={simpson['photo']} alt={simpson['name']}/>
    </div>);
}
