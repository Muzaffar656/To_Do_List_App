import React, { useState } from "react";

const EditTodo = ({ task , editask}) => {
  const [value, setValue] = useState(task.task);
  const handelSubmit = e =>{
    e.preventDefault()
    editask(task.id,value)
  }
  return (
    <form onSubmit={handelSubmit}>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTodo;
