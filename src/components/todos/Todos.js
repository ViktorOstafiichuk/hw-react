import {useEffect, useState} from "react";

import {Todo} from "../todo/todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then(value => {
                setTodos(value)
            })
    }, []);

    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    )
};

export {Todos};
