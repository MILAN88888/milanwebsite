import React from 'react';
import { TodoItem } from './TodoItem';

export default function
  todos(props) {
  return (

    <div className="todo-div">
      <div className='mt-5'>
        <h2 className='mb-4'>My Todos List</h2>
        {props.todos.length == 0 ? "No Data to show" :
          <table id="myTable">
            <thead>
              <tr><th>SN</th><th>Title</th><th>Description</th><th>Action</th></tr>
            </thead>
            <tbody>
              {props.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
              })}
            </tbody>
          </table>
        }
      </div>
    </div>

  )
}
