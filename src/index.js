import './css/costum-style.css';
import './css/style.css';
import myImage from './img/milan.jpg';
import laravel from './img/pic7.png';
import react from './img/pic8.png';
import jas from './img/pic9.svg';
import htm from './img/pic4.png';
import cs from './img/pic5.png';
import ph from './img/pic 6.png';
import git from './img/pic10.png';
import linkin from './img/pic11.png';
import facebook from './img/pic12.png';
import java from './img/java.png';
import python from './img/python.png';
import cv from './img/cv.png';
import vscode from './img/vscode.png';
import git_bash from './img/git.png';
import milan_cv from './img/milan_cv.pdf';
import filezilla from './img/filezilla.png';
import pycharm from './img/pycharm.png';
import sublime from './img/sublime.png';
import postman from './img/postman.png';

import ReactDOM from "react-dom/client";

import Header from './MyComponents/Header';
import Home  from './MyComponents/Home';

import Footer from './MyComponents/Footer';

import About from './MyComponents/About';
import Projects from './MyComponents/Projects';
import Links from './MyComponents/Links';



import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

 
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
    facebook:facebook,
    java:java,
    python:python,
    cv:cv,
    milan_cv:milan_cv,
    git_bash:git_bash,
    vscode:vscode,
    filezilla:filezilla,
    pycharm:pycharm,
    postman:postman,
    sublime:sublime
  }
 
  const baseUrl = "/";

  
  const router = createBrowserRouter([
    {
      path: `${baseUrl}`,
      element: (
        <>
          <Header title="Techmkr" />
          <Home pic={imptimg} path="/" />
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
      path: `${baseUrl}projects`,
      element: (
        <>
          <Header title="Techmkr" />
          <Projects path="projects" />
          <Footer />
        </>
      ),
    },
    
    {
      path: `${baseUrl}links`,
      element: (
        <>
          <Header title="Techmkr" />
          <Links path="blogs" />
          <Footer />
        </>
      ),
    },
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <RouterProvider router={router} />
  );
 