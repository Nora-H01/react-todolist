import React, { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./ToDoList";
import "./css/style.css";

const LSKEY = "MyTodoApp.todos"; //key localStorage

const App = () => {
  const [todos, setTodos] = useState(() => {
    // Retrieve data from localStorage on first rendering
    const savedTodos = localStorage.getItem(LSKEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [activeTab, setActiveTab] = useState("private"); // state default

  // save -> localStorage-> update `todos`
  useEffect(() => {
    localStorage.setItem(LSKEY, JSON.stringify(todos));
  }, [todos]);

  // add
  const addTodo = (newTodoName, category, date) => {
    if (newTodoName.trim() && category) {
      setTodos([
        ...todos,
        { id: Date.now(), 
          date: date ? date.toLocaleDateString() : "No date", 
          name: newTodoName, 
          state: "to do", 
          category: category,
        },
      ]);
    }
  };

  //update
  const updateTodoState = (id, newState) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, state: newState } : todo
      )
    );
  };

  // delete
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // delete all
  const deleteAllCompleted = () => {
    setTodos(todos.filter((todo) => todo.state !== "done"));
  };

  // Filtrer les tâches selon l'onglet actif
  const filteredTodos = todos.filter((todo) => todo.category === activeTab);

  return (
    <div className="app-container">
      <h1>My Todo App</h1>

      {/* Onglets */}
      <div className="tabs">
        <button
          className={activeTab === "private" ? "tab active" : "tab"}
          onClick={() => setActiveTab("private")}
        >
          Private
        </button>
        <button
          className={activeTab === "work" ? "tab active" : "tab"}
          onClick={() => setActiveTab("work")}
        >
          Work
        </button>
      </div>

      <Form addTodo={addTodo} activeTab={activeTab} />

      <TodoList
        todos={filteredTodos}
        updateTodoState={updateTodoState}
        deleteTodo={deleteTodo}
        deleteAllCompleted={deleteAllCompleted}
      />

    </div>
  );
};

export default App;
