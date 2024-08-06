import React from "react";

const Todo = ({ task, editTodo, deleteTodo }) => {
  return (
    <div className="todo-list">
      <p>{task.task}</p>
      <div className="editButton">
        <button onClick={() => deleteTodo(task.id)}>Delete</button>
        <button onClick={() => editTodo(task.id)}>Edit</button>
      </div>
    </div>
  );
};

export default Todo;
