import React from 'react'

const Home = (props) => {
    return (
        <div className='home-div'>
            <h2 className='text-success'>Hey!</h2>
            <br />
            <h1>Welcome, I am <span className='text-warning'>Milan</span></h1>
            <br />
            <p className='text-info mb-5'> <i>I'm software Developer From Nepal. Nice to see you!</i></p>
            <div className="mb-4 mt-4 container">
                <h4>Connect with Me</h4>
            </div>
            <div className="mb-4 mt-4 container">
                <a href='https://github.com/MILAN88888'><img alt='..' src={props.pic.git} /></a>
                <a href="https://www.linkedin.com/in/milan-chaudhary-80491b257/"><img alt='..' src={props.pic.linkin} /></a>
                <a href='https://www.facebook.com/ma.tmro.milan/'><img alt='..' src={props.pic.facebook} /></a>
            </div>
        </div>
    )
}
export default Home;