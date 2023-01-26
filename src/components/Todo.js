import React from "react";

export default function Todo(props) {
  return (
    <li className="todos">
      <div className="todo">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.TodoCompleted(props.id)}
        />
        <label className="Ftodo" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="ListEdits">
        <button
          type="button"
          className="DeleteButton"
          onClick={() => props.tododelet(props.id)}
        >
          <label>x</label>
        </button>
      </div>
    </li>
  );
}
