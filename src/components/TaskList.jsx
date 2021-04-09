import React from "react";
import "./TaskList.css";

import { useDispatch } from "react-redux";

import { removeTask, completeTask } from "../state/taskList/taskListSlice";
import { Form } from "react-bootstrap";

const TaskList = ({ name, item, id, taskIndex }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(completeTask(item));
  };

  const RemoveTask = () => {
    dispatch(removeTask(taskIndex));
  };

  return (
    <div className="TaskList">
      <p>{name}</p>
      <button onClick={RemoveTask}>Delete!</button>
      <Form.Check type="checkbox" onChange={handleCheck} />
    </div>
  );
};

export default TaskList;
