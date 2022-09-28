import React from "react";

import TodoListItem from '../todo-list-item'
import './todo-list.css'

const TodoList = ({ todos, onDeleted,
                    onToggleImportant,
                    onToggleDone }) => {
    const elements = todos.map((item) => {
        // console.log(onToggleDone(item.id))
        return (
            <li key={item.id} className='list-group-item'>
                <TodoListItem 
                 label={item.label}
                 done={item.done}
                 important={item.important}
                 onDeleted={() => onDeleted(item.id)}
                onToggleImportant={() => onToggleImportant(item.id)}
                onToggleDone={() => onToggleDone(item.id)}
            /></li>
        )
    })
    return (
    <ul className="list-group todo-list">
        {elements}
    </ul>
    )
}
export default TodoList

