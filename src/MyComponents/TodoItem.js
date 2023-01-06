import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <>
    <div className='card-div plan-div'>
            <div className="card mt-3 mx-3" style={{width: "18rem", backgroundColor:"lightyellow"}}>
            <div className="card-body text-success">
              <h5 className="card-title text-primary">{todo.Title} </h5>
              <p className="card-text text-success">{todo.Des}</p>
              <button className='btn btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
            </div>
          </div>
          </div>
    </>
  )
}
