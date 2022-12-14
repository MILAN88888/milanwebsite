import './css/todos.css';
import axios, {isCancel, AxiosError} from 'axios';
import Header from './MyComponents/header';
import Todos from './MyComponents/todos';
import Footer from './MyComponents/footer';
import { Addtodo } from './MyComponents/Addtodo';
import { About } from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  let inittodo;
  //Getting the todos List
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  } else {
    inittodo = JSON.parse(localStorage.getItem("todos"));
  }
  //Delete todos from the List
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  //Add Todos to List
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length == 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      Title: title,
      Des: desc
    }
    setTodos([...todos, mytodo]);
    console.log(mytodo.sno);

  }
  //Use effect for localStorage
  const [todos, setTodos] = useState(inittodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const baseUrl = "/";

  //Router of pages
  const router = createBrowserRouter([
    {
      path: `${baseUrl}`,
      element: (
        <>
          <Header title="Techmkr" searchBar={true} />
          <Addtodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
          <Footer />
        </>
      ),
    },
    {
      path: `${baseUrl}about`,
      element: (
        <>
          <Header title="Techmkr" searchBar={true} />
          <About />
          <Footer />
        </>
      ),
    },
  ]);

  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

export default App;
