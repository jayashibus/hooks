import React, { useState, useEffect } from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import "./index.css";
import Footer from "./Footer";
//import Task from "./Components/Task";

function TaskTracker() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3000/tasks");
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     text: "Doctors Appointment",
  //     day: "Feb 5th at 2.30pm",
  //     remainder: true,
  //   },
  //   {
  //     id: 2,
  //     text: "Meeting School",
  //     day: "Feb 5th at 2.30pm",
  //     remainder: false,
  //   },

  //   {
  //     id: 3,
  //     text: "Doctors Appointment",
  //     day: "Feb 5th at 2.30pm",
  //     remainder: true,
  //   },
  // ]);

  const addTask = async (task) => {
    const res = await fetch("http://localhost:3000/tasks/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleRemainder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, remainder: !taskToToggle.remainder };

    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remainder: data.remainder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />
      ) : (
        "No Task to Show"
      )}

      <Footer />
    </div>
  );
}

export default TaskTracker;
