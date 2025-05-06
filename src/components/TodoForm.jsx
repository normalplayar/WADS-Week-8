import React, { useState } from 'react'

export const TodoForm = ({addToDo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addToDo(value);

        setValue("");   
    }
    
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <div className='input-group mb-3'>
            <input type="text"
                className="todo-input form-control"
                value={value}
                placeholder="Enter task"
                onChange={(e) => setValue(e.target.value)}>
            </input>
            <button type="submit" className="todo-btn btn btn-outline-secondary">Add Task</button>
            </div>
        </form>
    )
}
