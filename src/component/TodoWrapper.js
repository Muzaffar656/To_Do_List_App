import React, { useState } from 'react'
import '../App.css'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { v4 as uuidv4 } from "uuid";
import EditTodo from './EditTodo'
const TodoWrapper = () => {
  const [todos,setTodos] = useState([])
  const addToDo = (todo)=>{
    setTodos(
      [...todos,{id:uuidv4(),task:todo,isEditing:false,isCompleted:false}]
    )
  }
  const editTodo = id =>{
    setTodos(
      todos.map((todo)=>todo.id === id ? {...todo,isEditing : !todo.isEditing}:todo)
    )
  }
  const editask = (id,task) =>{
    setTodos(
      todos.map((todo)=>todo.id === id ? {...todo,task,isEditing:!todo.isEditing}:todo)
    )
  }
  const deleteTodo = (id)=>{setTodos(todos.filter((todo)=>todo.id !==id) )}
  return (
    <div>

   
    <div className='main-wrapper'>
        <h1>Create Your ToDo</h1>
        <div>
        <TodoForm addToDo={addToDo}/>
        {
          todos.map((todo)=>
        

  todo.isEditing ? <EditTodo editask={editask} task={todo}/>: <Todo task={todo} deleteTodo={deleteTodo}  editTodo={editTodo}/>
       
          )
        }
        </div>
    </div>
    </div>
  )
}

export default TodoWrapper