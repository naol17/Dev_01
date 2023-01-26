import React from "react";

export default function Search(props) {
  return (
    <button
      type="button"
      className="btn toogle-btn"
      aria-pressed={props.clicked}
      onClick={() => props.setFilter(props.name)}
    >
      {props.name}
    </button>
  );
}
