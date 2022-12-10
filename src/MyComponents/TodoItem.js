import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <>
    <tr key={todo.sno}><td>{todo.sno}</td><td>{todo.Title}</td><td>{todo.Des}</td><td><button className='btn btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button></td></tr>
    </>

  )
}
