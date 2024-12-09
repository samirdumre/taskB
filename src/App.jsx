import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [tasks, setTasks] = useState([
    {
      title: "Learn React",
      details: "Read the React documentation and build a simple app",
      status: "todo",
    },
    {
      title: "Revise OOP",
      details: "Revise OOP and complete the assignment",
      status: "in-progress",
    },
    {
      title: "Complete the assignment",
      details: "Complete the assignment and submit it before Friday",
      status: "done",
    },
  ]);

  const [newTask, setNewTask] = useState({ title: "", details: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setTasks((prevTasks) => [...prevTasks, { ...newTask, status: "todo" }]);
    setNewTask({ title: "", details: "" });
  }

  function handleDelete(title) {
    const updatedTasks = tasks.filter((task) => task.title !== title);
    setTasks((prevTasks) => updatedTasks);
  }

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <>
      <h1>Kanban Board</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          required
        />
        <input
          type="text"
          name="details"
          placeholder="Details"
          value={newTask.details}
          onChange={(e) => setNewTask({ ...newTask, details: e.target.value })}
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <div className="columns">
        <div className="column todoTasks">
          <h1>Todo</h1>
          {todoTasks.map((task, index) => (
            <Card
              title={task.title}
              details={task.details}
              key={task.title}
              onDelete={() => handleDelete(task.title)}
            />
          ))}
        </div>
        <div className="column inProgressTasks">
          <h1>In Progress</h1>
          {inProgressTasks.map((task, index) => (
            <Card
              title={task.title}
              details={task.details}
              key={task.title}
              onDelete={() => handleDelete(task.title)}
            />
          ))}
        </div>
        <div className="column doneTasks">
          <h1>Done</h1>
          {doneTasks.map((task, index) => (
            <Card
              title={task.title}
              details={task.details}
              key={task.title}
              onDelete={() => handleDelete(task.title)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
