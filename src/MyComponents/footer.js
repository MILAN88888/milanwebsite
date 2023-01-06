import React from 'react'
import {
  Link,
} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="section-footer">
       <hr className='horizontal-bar' />
    <div className="container">
      <div className="footer-menu-wrap">
        <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav">
          <li className="nav-item"><Link className="p-2" to="/about">My Info</Link></li>
          <li className="nav-item"><Link className="p-2" to="/projects">My Projects</Link></li>
          <li className="nav-item"><Link className="p-2" to="/links">Links</Link></li>
        </ul>
      </div>
      <div className="footer-credit pt-2">
        <p>Copyright <span className='text-dark'>©</span> Techmkr</p>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" ></script>
  </footer>
  )
}
export default Footer;