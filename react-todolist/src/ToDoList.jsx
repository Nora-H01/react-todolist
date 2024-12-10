import React from "react";
import "./style.css";

const TodoList = ({ todos, updateTodoState }) => {
  return (
    <div className="todo-list-container">
      <h2>Todos</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.state}`}>
            <div className="todo-item-content">
              <span
                className="state-indicator"
                style={{
                  backgroundColor:
                    todo.state === "done"
                      ? "green"
                      : todo.state === "in progress"
                      ? "orange"
                      : "red",
                }}
              ></span>
              {todo.name}
            </div>
            <select
              value={todo.state}
              onChange={(e) => updateTodoState(todo.id, e.target.value)}
              className="state-selector"
            >
              <option value="to do">To Do</option>
              <option value="in progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
