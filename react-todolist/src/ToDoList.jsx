import React from "react";
import "./style.css";

const TodoList = ({ todos, updateTodoState, deleteTodo, deleteAllCompleted }) => {
  return (
    <div className="todo-list-container">
      <h2>Todos</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.state}`}>
            <div className="todo-item-content">
              <span
                className={`state-indicator ${
                  todo.state === "done"
                    ? "state-done"
                    : todo.state === "in progress"
                    ? "state-in-progress"
                    : "state-to-do"
                }`}
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
            {/* Display the delete button if the task has been completed */}
            {todo.state === "done" && (
              <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                X
              </button>
            )}
          </li>
        ))}
      </ul>
      {/* Button to delete all completed tasks */}
      <button onClick={deleteAllCompleted} className="delete-all-btn">
        Delete All
      </button>
    </div>
  );
};

export default TodoList;
