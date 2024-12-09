import React, { useState } from "react";
import TodoList from "./ToDoList";
import "./style.css";

const App = () => {
  const initialTodos = [
    { id: 1, name: "My first todo", done: false },
    { id: 2, name: "My second todo", done: true },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), name: newTodo, done: false },
      ]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className="app-container">
      <h1>My Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Type a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="todo-input"
        />
        <button onClick={addTodo} className="add-todo-button">
          Add Todo
        </button>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
