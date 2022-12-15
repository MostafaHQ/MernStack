import "./App.css";
import AddTask from "./components/AddTask";
import DisplayTask from "./components/DisplayTask";
import React, { useState } from "react";

function App() {
  const [taskValue, setTaskValue] = useState([]);
  const submitTask = (value) => {
    setTaskValue([...taskValue, value]);
  };
  const deleteMe = (id) => {
    setTaskValue(taskValue.filter((item, i) => id != i));
  };

  const updateMe = (id) => {
    const updateTasks = taskValue.map((item, i) => {
      if (id === i) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTaskValue(updateTasks);
  };

  return (
    <div className="App">
      <AddTask submitTask={submitTask} />
      <DisplayTask tasks={taskValue} deleteTask={deleteMe} updateTask={updateMe}/>
    </div>
  );
}

export default App;
