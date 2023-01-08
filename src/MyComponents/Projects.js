import React from 'react'

const Projects = () => {
  return (
    <div className='container blog-div'>
    <div className='container blogs'>
      <h3 className='mb-3 mt-2'>My Projects</h3>
      <p>These are the my some projects.</p>
      <div className='row'>
      <div className="card mt-3 mx-3" style={{ width: "18rem", backgroundColor: "" }}>
          <div className="card-body">
            <h5 className="card-title text-info">Library Management System</h5>
            <p className="card-text text-black"><i>This project i have done when i was in 6th semester of my Engineering as DBMS mini project. We are two me and my friend Nikhil Basur. Both together we had finished this Project. Durtion of project is 6 month. In the project we used html, css, PHP and MySql and Software are Xamp, Sublime text editor.</i></p>
            {/* <a href="https://codepen.io/trending" className="text-success"><u>Click to see</u></a> */}
          </div>
          <div className='card-footer'><a href=".." className="text-success"><u>No github link</u></a></div>
        </div> 
        <div className="card mt-3 mx-3" style={{ width: "18rem", backgroundColor: "" }}>
          <div className="card-body">
            <h5 className="card-title text-info">Quotes, Alarm and Js Calculator</h5>
            <p className="card-text text-black"><i>When i was started learning javascript. I created the Add todos list and Js Calculator as learning Project</i></p>
            
          </div>
          <div className='card-footer'><a href="https://github.com/MILAN88888/Js_calculator" className="text-success"><u>github</u></a> <a href="https://milan88888.github.io/Js_calculator/index.html" className="text-success mx-5"><u>visit</u></a></div>
        </div>
        <div className="card mt-3 mx-3" style={{ width: "18rem", backgroundColor: " " }}>
          <div className="card-body">
            <h5 className="card-title text-info">Employee Management System Using Ajax</h5>
            <p className="card-text text-black"><i>This is Employee Management System. When i was learning ajax. I had completed this project for the practise. I used total ajax. There is no page reloading. registration, login, listing, deletion, updation all are using ajax. In backend i used PHP and MYSQL</i></p>
           
          </div>
          <div className='card-footer'><a href="https://github.com/MILAN88888/EMS" className="text-success"><u>github</u></a></div>

        </div>
        <div className="card mt-3 mx-3" style={{ width: "18rem", backgroundColor: " " }}>
          <div className="card-body">
            <h5 className="card-title text-info">BookXchange using Laravel 8</h5>
            <p className="card-text text-black"><i>When i was learning Laravel. I have completed this project. Here, Users can add there book. And give others user to read as leanding and User also can take other books read as borrows</i></p>
          </div>
          <div className='card-footer'><a href="https://github.com/MILAN88888/Laravel-BookXchange" className="text-success"><u>github</u></a></div>
          
        </div>
        <div className="card mt-3 mx-3" style={{ width: "18rem", backgroundColor: " " }}>
          <div className="card-body">
            <h5 className="card-title text-info">Milan Portfolio using React Js</h5>
            <p className="card-text text-black"><i>This is my Portfolio website. I learn and i have completed this using reactj js. This gives the information about myself.</i></p>
          </div>
          <div className='card-footer'><a href="https://github.com/MILAN88888/milanwebsite" className="text-success"><u>github</u></a></div>
        </div>
        <div className="card mt-3 mx-3" style={{ width: "18rem", backgroundColor: " " }}>
          <div className="card-body">
            <h5 className="card-title text-info">Wordpress Registration Plugin</h5>
            <p className="card-text text-black"><i>This is my first Wordpress plugin where user can do registration and list of registered can see. Also registerd user can filter the user according to rating and registered date</i></p>
          </div>
          <div className='card-footer'><a href="https://github.com/MILAN88888/plugins-and-themes" className="text-success"><u>github</u></a></div>

        </div>
      </div>
      </div>
    
    </div>
    
  )
}
export default Projects;
