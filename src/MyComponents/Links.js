import React from 'react'

const Links = () => {
  return (
    <div className='container blog-div'>
       <div className='container blogs'>
      <h3 className='mb-3 mt-5'>My Explore</h3>
      <p>These are the best useful links</p> 
      <div className='row'>
        <div className="card mt-3 mx-3" style={{ width: "18rem", backgroundColor: "  " }}>
          <div className="card-body">
            <h5 className="card-title text-info">Code Pen</h5>
            <p className="card-text text-black"><i>There you can test and practise your html, css and javascript. Also you will get the beatiful design..</i></p>
          </div>
          <div className='card-footer'> <a href="https://codepen.io/trending" className="text-success"><u>Click to see</u></a></div>
        </div>
      <div className="card mt-3 mx-3" style={{ width: "18rem", backgroundColor: "  " }}>
          <div className="card-body">
            <h5 className="card-title text-info">Setup Laravel Project</h5>
            <p className="card-text text-black"><i>How to start the laravel project from the begining and its setup steps are listed as ..</i></p>
            
          </div>
          <div className='card-footer'><a href="#laravelsetup" className="text-success"><u>Click to see</u></a></div>
        </div>
        <div className="card mt-3 mx-3" style={{ width: "18rem", backgroundColor: "  " }}>
          <div className="card-body">
            <h5 className="card-title text-info">Fix error mysql shutdown unexpectedly</h5>
            <p className="card-text text-black"><i>Firstly check the error log from Xampp server..</i></p>
          </div>
            
          <div className='card-footer'> <a href="#laravelsetup" className="text-success"><u>Click to see</u></a></div>
        </div>
        <div className="card mt-3 mx-3" style={{ width: "18rem", backgroundColor: "  " }}>
          <div className="card-body">
            <h5 className="card-title text-info">Where and How to host the Portfolio website</h5>
            <p className="card-text text-black"><i>Portfolio static website best hosting from github page feature of github..</i></p>
          </div>
          <div className='card-footer'> <a href="#laravelsetup" className="text-success"><u>Click to see</u></a> </div>
        </div>
        <div className="card mt-3 mx-3" style={{ width: "18rem", backgroundColor: "  " }}>
          <div className="card-body">
            <h5 className="card-title text-info">Which frontend framework best to learn in 2023</h5>
            <p className="card-text text-black"><i>Now the best framework for frontend is React. Steps to learn react js</i></p>
          </div>
          <div className='card-footer'> <a href="#reactjs" className="text-success"><u>Click to see</u></a> </div>
        </div>
    </div>
    </div>
    <div className='container' id='laravelsetup'>
      <h3 className='mb-2 text-warning'>Laravel Setup</h3>
      <p> Laravel is the PHP framework Which is most powerful, secure, easy and featuristy. </p>
      <h6 className='text-info'>Steps:</h6>
      <ol>
        <li>Install Composer</li>
        <li>Install Xampp</li>
        <li>Set Environment variable path for PHP</li>
        <li>Choose folder, Open cmd and type: composer create-project laravel/laravel [project_name]</li>
        <li>It will take time. After created succefully you will get list of folder controller, database, migration, seeders components</li>
        <li>To start server type: php artisan serve</li>
        <li>To create controller type: php artisan make:controller [controller_name]</li>
      </ol>
    </div>
    <div className='container mt-5' id='reactjs'>
      <h3 className='mb-2 text-warning'>Which frontend framework best to learn in 2023</h3>
      <p className=''>In 2023 most the most famous frontend framework that is React Js. It is developed by Facebook. The single page application makes user experience better. Angular is also option for the frontend which is developed by google. But React Js is famous because of its working features and updates. React Js is Working with Virtual DOM. That means What the changes are going to change in Real DOM is only that changes are going to change from Virtual Dom. So that make user experience better and faster because changes happens only that component which are required so that it help to no reloading and does not going to take more time. The most of application are using React js. In React There functional component and class component. First start with function component. Class component is not required after the upate of come in 2018. How to start</p>
      <h6 className='text-info'>Steps:</h6>
      <ol>
        <li>First learn basic javascript</li>
        <li>Then the features of ES6 like classes, arrow function, promises and await function, props etc.</li>
        <li>And then start the react with function component</li>
      </ol>
    </div>
    </div>
  )
}
export default Links;