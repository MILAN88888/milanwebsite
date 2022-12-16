import './css/todos.css';
import myImage from './img/pic3.svg';
import laravel from './img/pic7.png';
import react from './img/pic8.png';
import jas from './img/pic9.svg';
import htm from './img/pic4.png';
import cs from './img/pic5.png';
import ph from './img/pic 6.png';
import git from './img/pic10.png';
import linkin from './img/pic11.png';
import facebook from './img/pic12.png';

import './css/style.css';
import axios, {isCancel, AxiosError} from 'axios';

import Header from './MyComponents/header';
import{ Home } from './MyComponents/Home';
import Todos from './MyComponents/todos';
import Footer from './MyComponents/footer';
import { Addtodo } from './MyComponents/Addtodo';
import { About } from './MyComponents/About';
import { Blogs } from './MyComponents/Blogs';

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
  const imptimg = {
    myImage:myImage,
    laravel:laravel,
    react:react,
    jas:jas,
    htm:htm,
    cs:cs,
    ph:ph,
    git:git,
    linkin:linkin,
    facebook:facebook
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
          <Header title="Techmkr" />
          <Home path="/" />
          <Footer />
        </>
      ),
    },
    {
      path: `${baseUrl}planlist`,
      element: (
        <>
          <Header title="Techmkr"  />
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
          <Header title="Techmkr" path="/" />
          <About pic={imptimg} path="about" />
          <Footer />
        </>
      ),
    },
    {
      path: `${baseUrl}blogs`,
      element: (
        <>
          <Header title="Techmkr" />
          <Blogs path="blogs" />
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
