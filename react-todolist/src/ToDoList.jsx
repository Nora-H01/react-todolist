const TodoList = ({ todos, updateTodoState, deleteTodo, deleteAllCompleted }) => {
  const privateTodos = todos.filter((todo) => todo.category === "private");
  const workTodos = todos.filter((todo) => todo.category === "work");

   //counter
   const getIncompleteCount = () => {
    return todos.filter((todo) => todo.state !== "done").length;
  };

  const renderTodoList = (todoList) =>
    todoList.map((todo) => (
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
        {todo.state === "done" && (
          <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
            X
          </button>
        )}
      </li>
    ));

  return (
    <div className="todo-list-container">
      <h4>-------------------------------</h4>
      <h2>Todo List</h2>
      <p className="todo-counter">{getIncompleteCount()} todos left</p>
      <div className="category">
        {/* <h3>Private</h3> */}
        <ul className="todo-list">{renderTodoList(privateTodos)}</ul>
      </div>
      <div className="category">
        {/* <h3>Work</h3> */}
        <ul className="todo-list">{renderTodoList(workTodos)}</ul>
      </div>
      <button onClick={deleteAllCompleted} className="delete-all-btn">
        <span>X</span> All
      </button>
    </div>
  );
};

export default TodoList;
