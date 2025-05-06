import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({task, toggleComplete, deleteToDo, editToDo}) => {
    return (
        <div className="Todo" key={task.id}>
            <p
                className={`${task.completed ? 'completed' : ""}`}>{task.task}
            </p>
            <div className="form-check form-check-inline">
                <input
                    type="checkbox"
                    className='form-check-input'
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                    value={''}
                />
            <label>

            </label>
            </div>
            <div className="form-check form-check-inline">
                    <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={() => editToDo(task.id)}
                />
            </div>
            <div className="form-check form-check-inline">
                    <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteToDo(task.id)}
                />
            </div>

        </div>
            
    )
}