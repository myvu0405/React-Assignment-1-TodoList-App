import React from 'react'

export default function TodoListFunc(props) {

    const handleDelete = (id) => {
        props.onClick(id);
    }
    const {todoList} = props;
    return (
        <div>
            <h3>Available todo list:</h3>
            <ul>
                {todoList.length>0 && todoList.map(todo => (<li key={todo.id}>{todo.task}: {todo.description} <button onClick={() => handleDelete(todo.id)}>Done</button></li>))}
            </ul>
        </div>
    )
}
