import React, { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";
import ClearDoneTasks from './components/ClearDoneTasks';
import TasksCounter from './components/TasksCounter';
import TaskInput from './components/TaskInput';
import './App.css'
const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const getStoredTasks = () => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  };
  useEffect(() => {
    getStoredTasks();
  }, []);

  const getNextTaskId = () => {
    return tasks.length > 0
      ? Math.max(
          ...tasks.map((task) => {
            return task.id;
          })
        ) + 1
      : 1;
  };

  const handelAdd = (e) => {
    if (e.key === "Enter" && task.trim() !== "") {
      const tasksList = tasks;
      const id = getNextTaskId();
      const newTask = { id, task, active: true };
      setTasks([...tasksList, newTask]);
      setTask("");
      localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    }
  };
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify([...updatedTasks]));
  };
  const handleTaskStatus = (id) => {
    const updatedTasks = tasks.map((task) => {
      return task.id === id ? { ...task, active: !task.active } : task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify([...updatedTasks]));
  };
  const clearDoneTasks = () => {
    const updatedTasks = tasks.filter((task) => {
      return task.active;
    });
    setTasks(updatedTasks);
  };


  return (
    <div className="mainSection">
      <TaskInput task={task}  setTask={setTask}  handelAdd={handelAdd} />
      <TaskList tasks={tasks} filter={filter} handleDelete={handleDelete} handleTaskStatus={handleTaskStatus} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <ClearDoneTasks clearDoneTasks={clearDoneTasks} />
      <TasksCounter tasks={tasks} />
    </div>
  );
};

export default App;