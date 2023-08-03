import React from "react";

const TodoItem = (props) => {
  return (
    <li className="todo-item">
      <span>
        {props.completed ? <></> : <input type="checkbox" />}
        <sapn className="todo-item-text">{props.text}</sapn>
      </span>
      <p>...</p>
    </li>
  );
};

export default TodoItem;
