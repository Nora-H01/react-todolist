import React from "react";
import "./style.css";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div className="todo-list-container">
      <h2>Todos</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.done ? "done" : ""}`}>
            <input
              type="checkbox"
              id={todo.id}
              name={todo.name}
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
              className="todo-checkbox"
            />
            {todo.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
