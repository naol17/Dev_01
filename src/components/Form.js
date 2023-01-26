import React, { useState } from "react";

export default function Form(props) {
  const [todoName, setTodoName] = useState("");

  function handleChange(e) {
    setTodoName(e.target.value);
  }

  function handlesubmit(e) {
    e.preventDefault();
    props.addTodo(todoName);
    setTodoName("");
  }

  return (
    <form className="form" onSubmit={handlesubmit}>
      <h3>Add Todos</h3>

      <input
        type="text"
        className="todoinput mt-2 pt-2 text-blue-400"
        value={todoName}
        onChange={handleChange}
        placeholder="Create a New Todo"
      />
      <button type="submit" className="Submitbtn bg">
        + Add Task
      </button>
    </form>
  );
}
