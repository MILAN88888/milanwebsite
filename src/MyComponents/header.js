import React from 'react'
import PropTypes from 'prop-types'
import {
  Link,
} from "react-router-dom";

const Header = () => {
  return (
    <header className="siteHeaderMain">
      <div className="siteHeader">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center">
            <h1 className="site-brand pull-left d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
              <Link className="navbar-brand" to="/">
                <span className="logoText"><span className='text-success'>T</span>ech<span className='text-success'>m</span>kr</span>
              </Link>
            </h1>
            <div className="mainMenu pull-right">
              <ul className="nav nav-pills menu">
                <li className="nav-item"><Link to="/about" className="nav-link mynav">My Info</Link></li>
                <li className="nav-item"><Link to="/projects" className="nav-link"><i
                  className="fa fa-lock"></i>&nbsp;&nbsp;My Projects</Link>
                </li>
                <li className="nav-item"><Link to="/links" className="nav-link"><i
                  className="fa fa-lock"></i>&nbsp;&nbsp;Links</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className='horizontal-bar' /> */}
    </header>
  )
}
Header.defaultProps = {
  title: 'Your Title Here',
}
Header.prototype = {
  title: PropTypes.string.isRequired,
}
export default Header;