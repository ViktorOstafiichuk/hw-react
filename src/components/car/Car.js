const Car = ({car}) => {
    const {id, model, price, year, photo} = car;
    return (
        <div>
            <h3>id:{id}</h3>
            <h3>model:{model}</h3>
            <h3>price:{price}</h3>
            <h3>year:{year}</h3>
        </div>
    );
};

export {Car};
