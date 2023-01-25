const Dog = ({dog, dispatch}) => {
    return (
        <div>
            {dog.name}
            <button onClick={() => dispatch({type: 'deleteDog', payload: dog.id}) }>delete Dog</button>
        </div>
    );
};

export {Dog};
