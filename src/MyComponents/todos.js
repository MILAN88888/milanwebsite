import React from 'react';
import { TodoItem } from './TodoItem';

export default function
  todos(props) {
  return (
    <div className="todo-div">
      <div className='mt-5'>
        {props.todos.length === 0 ? "No Data to show" :
              props.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
              })} 
      </div>
    </div>

  )
}
