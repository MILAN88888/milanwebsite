import React from 'react';
import {TodoItem} from './TodoItem';

export default function 
todos(props) {
  return (
    <div>
        <div className="todo-div">
    <h1>My Todos List</h1>
    <table id="myTable">
        <thead>
    <tr><th>SN</th><th>Title</th><th>Description</th><th>Action</th></tr>
    </thead>
    <tbody>
    {props.todos.map((todo)=>{
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
    })}
    </tbody>
    </table>
    </div>
    </div>
  )
}
