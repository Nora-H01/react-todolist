import React, { useState } from "react";

const Form = ({ addTodo, activeTab }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTodo(taskName, activeTab); // Utilise directement `activeTab` pour la catégorie
      setTaskName(""); // Réinitialiser l'input
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter a task..."
        className="task-input"
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default Form;
