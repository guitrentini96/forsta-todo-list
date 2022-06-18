import React, { useState } from "react";
import { TodoList } from "./components/todoList";

import "./styles.scss";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy milk", done: true },
    { text: "Buy bread", done: false }
  ]);

  const [currentTodo, setCurrentTodo] = useState({ text: "", done: false });

  const handleInput = (event) => {
    setCurrentTodo({ ...currentTodo, text: event.target.value });
  };

  const addNewTodo = () => {
    setTodos([currentTodo, ...todos]);
    setCurrentTodo({ text: "", done: false });
  };

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <input
        value={currentTodo.text}
        onChange={handleInput}
        placeholder="New todo"
      />
      <button onClick={addNewTodo}>add</button>
      <TodoList todos={todos} />
    </div>
  );
}
