const Cat = ({cat, dispatch}) => {
    return (
        <div key={cat.id}>
                {cat.name}
                <button onClick={() => dispatch({type: 'deleteCat', payload: cat.id}) }>delete Cat</button>
        </div>
    );
};

export {Cat};
