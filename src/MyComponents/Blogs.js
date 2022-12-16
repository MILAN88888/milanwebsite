import React from 'react'
import {
  Link,
} from "react-router-dom";

export const Blogs = () => {
    return (
        <div className="about-div">
          <h1 className='mb-5 mt-3'>Blogs</h1>
          <div className='card-div'>
            <div className="card mt-3 mx-3" style={{width: "18rem", backgroundColor:"lightyellow"}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-success">Blog1 </h5>
              <p className="card-text text-info">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
          <div className="card mt-3 mx-3" style={{width: "18rem", backgroundColor:"lightyellow"}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-success">Blog 2</h5>
              <p className="card-text text-info">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
          <div className="card mt-3 mx-3" style={{width: "18rem", backgroundColor:"lightyellow"}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-success">Blog 3</h5>
              <p className="card-text text-info">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
          <div className="card mt-3 mx-3" style={{width: "18rem", backgroundColor:"lightyellow"}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-success">Blog 3</h5>
              <p className="card-text text-info">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
          
          </div>
        </div>
    )
}
