import './css/footer.css';

import Header from './MyComponents/header';
import Todos from './MyComponents/todos';
import Footer from './MyComponents/footer';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
   setTodos(todos.filter((e)=>{
    return e!==todo
   }))
  }
  const [todos, setTodos] = useState([
    {
      sno:1,
      Title:"Market",
      Des:"Go to market to buys vegetable and rice for kitchen"
    },
    {
      sno:2,
      Title:"School",
      Des:"Go to school"
    },
    {
      sno:3,
      Title:"Blog",
      Des:"I am going Bloging high mountain ....."
    },
  ])
  return (
    <>
    <Header title = "To-Do-List" searchBar={false} />
    <Todos todos = {todos} onDelete={onDelete} />
    <Footer/>
    </>
  );
}

export default App;
