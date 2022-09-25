import React from "react";
import {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {

  const [text,setText] =useState("");
  const [category,setCategory] = useState("Code");

  function handleSubmit(e){
    //preventing the form from submitted 
    e.preventDefault();
    onTaskFormSubmit({text,category});
    setText("");
    setCategory("Code");
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text"  onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select value={category} onChange={(e)=> setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {categories.map((catego) =>(<option key={catego}>{catego}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
