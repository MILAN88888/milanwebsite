import React from 'react'
import {
  Link,
} from "react-router-dom";

export default function 
() {
  return (
    <footer className="section-footer">
       <marquee className="text-success" scrollamount="50" direction="left">______________________________________</marquee>
    <div className="container">
      <div className="footer-menu-wrap">
        <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav">
          <li className="nav-item"><Link className="p-2" to="/">Home</Link></li>
          <li className="nav-item"><Link className="p-2" to="/about">MyInfo</Link></li>
          <li className="nav-item"><Link className="p-2" to="">Contact</Link></li>
        </ul>
      </div>
      <div className="footer-credit pt-2">
        <p>Copyright © Techmkr</p>
      </div>
    </div>
  </footer>
  )
}
