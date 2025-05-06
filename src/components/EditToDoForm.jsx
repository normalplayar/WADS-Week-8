import React, { useState } from 'react'

export const EditTodoForm = ({ editToDo, task }) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();

        editToDo(value, task.id);
    }

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <div className='input-group input-group-sm mb-3'>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="todo-input form-control"
                placeholder='Update task' />

            <button
                type="submit"
                className='todo-btn btn btn-outline-secondary'>Update Task</button>
            </div>
        </form>
    )
}