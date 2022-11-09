const Photo = ({photo}) => {

    let{id, title, url} = photo;

    return (
        <div>
            <h2>{id} - {title}</h2>
            <img src={url} alt=""/>
        </div>
    )
};

export {Photo};
