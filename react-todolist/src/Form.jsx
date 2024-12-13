import React, { useRef } from "react";

const Form = ({ addTodo }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reloading
    const newTodoName = inputRef.current.value;
    addTodo(newTodoName); // Calls the function provided by App.jsx
    inputRef.current.value = ""; // Reset
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a new todo"
        ref={inputRef}
        className="todo-input"
      />
      <button type="submit" className="add-todo-button">
        Add Todo
      </button>
    </form>
  );
};

export default Form;
