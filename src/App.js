import React from "react";
import Header from './components/Header';
import Button from './components/Button';
import './style.css'
import TodoItem from "./components/Todoitem";

const App = () => {
  return (
    <div>
      <span className="main-header"><Header className="main-header" text="Todoie App"/></span>
    <div className="todo-container">
      <Header text="Todo"/>
      <TodoItem text="Wakeup"/>
      <TodoItem text="Eat"/>
      <TodoItem /*completed = {true}*/ text="Code"/>
      <TodoItem text="Sleep"/>
      <TodoItem text="Repeat"/>
      <Button />
    </div>
    </div>
  );
};

export default App;
