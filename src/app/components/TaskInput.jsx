'use client'; 
import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");  

  const setTaskValue = (e) => {
    setTask(e.target.value);  
  };

  const taskSubmit = (e) => {
    e.preventDefault(); //set the task input
    addTask(task);  
    setTask("");  
  };

  return (
    <form onSubmit={taskSubmit}>
      <input
        type="text"
        value={task}
        onChange={setTaskValue}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
