import React, { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./ToDoList";
import "./style.css";

const LSKEY = "MyTodoApp.todos"; //key localStorage

const App = () => {
  const [todos, setTodos] = useState(() => {
    // Retrieve data from localStorage on first rendering
    const savedTodos = localStorage.getItem(LSKEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // save -> localStorage-> update `todos`
  useEffect(() => {
    localStorage.setItem(LSKEY, JSON.stringify(todos));
  }, [todos]);

  // add
  const addTodo = (newTodoName) => {
    if (newTodoName.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), name: newTodoName, state: "to do" },
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

  //counter
  const getIncompleteCount = () => {
    return todos.filter((todo) => todo.state !== "done").length;
  };
  

  return (
    <div className="app-container">
      <h1>My Todo App</h1>
      <Form addTodo={addTodo} />
      <TodoList
        todos={todos}
        updateTodoState={updateTodoState}
        deleteTodo={deleteTodo}
        deleteAllCompleted={deleteAllCompleted}
      />
      <p className="todo-counter">{getIncompleteCount()} todos left</p>
    </div>
  );
};

export default App;
