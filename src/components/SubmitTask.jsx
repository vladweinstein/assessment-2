import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../state/taskList/taskListSlice';

import './SubmitTask.css';

const SubmitTask = (props) => {
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState({ completed: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(newTask));
    };

    return (
        <form className="task-submit-form" onSubmit={handleSubmit}>
            <label htmlFor="task-type">Task Name</label>
            <input id="task-type" type="text" onChange={(e) => setNewTask({ description: e.target.value })}></input>
            <button type="submit">Submit Task</button>
        </form>
    )
};

export default SubmitTask;