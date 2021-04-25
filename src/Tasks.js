import React, { useState } from "react";
import NewTask from "./NewTask";
import TasksList from "./TasksList";

export default function Tasks() {
  // hook your code up here ;)
  const [newTask, setNewTask] = useState({});
  const handleChange = ({ target }) => {
    const {name, value} = target;
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
      id: Date.now()
    }))
  };

  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllTasks((prev) => {
      return [...prev, newTask]
    })
    setNewTask({});
  };

  const handleDelete = (id) => {
    setAllTasks((prev) => {
      return prev.filter((task) => task.id !== id)
    })
  };

  return (
    <main>
      <h1>Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
      <TasksList
        allTasks={allTasks}
        handleDelete={handleDelete} />
    </main>
  )
}
