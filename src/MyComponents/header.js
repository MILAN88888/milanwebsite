import { getByTitle } from '@testing-library/react'
import React from 'react'
import PropTypes from 'prop-types'

export default function 
header(props) {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">{props.title}</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active">Signin</a>
        </li>
      </ul>
      
      { props.searchBar ? 
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" / >
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> : ""
    }
    </div>
  </div>
</nav>
    </div>
  )
}
header.defaultProps = {
  title : 'Your Title Here',
  searchBar : true
}
header.prototype = {
  title : PropTypes.string,
  searchBar : PropTypes.bool.isRequired
}