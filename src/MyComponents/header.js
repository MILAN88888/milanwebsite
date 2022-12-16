import React from 'react'
import PropTypes from 'prop-types'
import {
  Link,
} from "react-router-dom";

export default function
  header(props) {
  return (
    <div>
<header className="siteHeaderMain">
    <div className="siteHeader">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          <h1 className="site-brand pull-left d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
            <Link className="navbar-brand" to="#">
              <span className="logoText"><span className='text-success'>T</span>ech<span className='text-success'>m</span>kr</span>
            </Link>
          </h1>
       
          <input className="side-menu" type="checkbox" id="side-menu" />
          <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
          
          <div className="mainMenu pull-right">
            <ul className="nav nav-pills menu">
              <li className="nav-item"><Link to="/" className="nav-link" aria-current="page">Home</Link>
              </li>
              <li className="nav-item"><Link to="/about" className="nav-link mynav">My Info</Link></li>
              <li className="nav-item"><Link to="/blogs" className="nav-link"><i
                    className="fa fa-lock"></i>&nbsp;&nbsp;Blogs</Link></li>
              <li className="nav-item"><Link to="/planlist" className="nav-link"><i className="fa fa-user-o"></i>&nbsp;&nbsp;
                Save Your Plan</Link></li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <marquee className="text-success" scrollamount="50" direction="right">______________________________________</marquee>
    </div>
  )
}
header.defaultProps = {
  title: 'Your Title Here',
  searchBar: true
}
header.prototype = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}