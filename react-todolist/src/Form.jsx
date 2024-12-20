import React, { useState } from "react";
import CalendarComponent from "./calendar";

const Form = ({ addTodo, activeTab }) => {
  const [taskName, setTaskName] = useState("");
  const [selectedDate, setSelectedDate] = useState(null); // Stocker la date sélectionnée

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTodo(taskName, activeTab, selectedDate); // Ajouter la date à la tâche
      setTaskName("");
      setSelectedDate(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
        {/* add calendar button */}
        <CalendarComponent onDateSelect={setSelectedDate} />
  
        {/* show date */}
        {selectedDate && (
          <p className="selected-date">
            Selected date : {selectedDate.toLocaleDateString()}
          </p>
        )}
        
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
