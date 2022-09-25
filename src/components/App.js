import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  //define a state and a list of tasks that are running in this state and should be running inputs and outputs from this state 
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All")

  const addTask = (newTask) => {
    //setTask is changeable so we use spread method(it does not mutate the tasks) to add newTask to the list when the form is submitted
    setTasks([...tasks, newTask]);
  }
  function deleteTask(deletedTaskText){
    setTasks(tasks.filter((task) => task.text !== deletedTaskText ));
  }

  const seenTasks = tasks.filter((task) => category === "All" || task.category === category);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  
      categories={CATEGORIES} 
      selectedCategory={category} 
      onSelectCategory={setCategory} />
      <div className="tasks">
        <h4>Tasks</h4>
        <NewTaskForm 
          categories={CATEGORIES.filter((cat) => cat !=="All")}
          onTaskFormSubmit = {addTask}
        />
        <TaskList onDeleteTask={deleteTask} tasks={seenTasks} />
      </div>
    </div>
  );
}

export default App;
