import React,{useState} from 'react'
import '../App.css'
const TodoForm = ({addToDo}) => {
  const [value,setValue]=useState('')
  const handelSubmit = e =>{
    e.preventDefault()
    addToDo(value)
    setValue('')
  }
  return (
    <>
        <form onSubmit={handelSubmit}>
            <input type="text" placeholder='Enter your Todo' value={value} onChange={(e)=>setValue(e.target.value)} />
            <button type='submit'>Add Task</button>
        </form>
    </>
  )
}

export default TodoForm