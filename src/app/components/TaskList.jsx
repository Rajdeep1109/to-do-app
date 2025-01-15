'use client';
import { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import "../styles/tasklist.css";
import HolidayList from "./HolidayList";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTab, setCurrentTab] = useState("all");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks)); //stores tasks in localStorage
    }
  }, [tasks]);

  const addTask = (taskText) => {
    const now = new Date(); //gets the time at which task was added
    const task = { 
      text: taskText, 
      isPriority: false, //to check if task is high priority or not
    timestamp:now.toLocaleTimeString(), };
    const newTasks = [...tasks, task]; //add task to previous tasks
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);// if pressed delete then it will filter out the tasks that are not deleted into a new array
    setTasks(newTasks);
  };

  const togglePriority = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, isPriority: !task.isPriority } : task
    );
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter(task =>
    currentTab === "all" ? true : task.isPriority //toggle between tab having all task and priority task tab
  );

  return (
    <div className="tasklist-container">
      <h1 className="tasklist-title">To-Do List</h1>
      <HolidayList/>
      <TaskInput addTask={addTask} />

      <div className="tab-buttons">
        <button className="tab-button" onClick={() => setCurrentTab("all")}>All Tasks</button>
        <button className="tab-button" onClick={() => setCurrentTab("priority")}>Priorities</button>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task, index) => (
          <li className="task-item" key={index}>
            <span className="time">{task.timestamp}</span>
            <span className="task-text">{task.text}</span>
            <div className="list-button">
            <button className="priority-btn" onClick={() => togglePriority(index)}>
              {task.isPriority ? "🌟" : "⭐"}
            </button>
            <button className="delete-btn" onClick={() => deleteTask(index)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
