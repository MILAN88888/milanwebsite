import React from 'react'

const Home = (props) => {
    return (
        <div className='home-div'>
            <h2 className='text-success'>Hey!</h2>
            <br />
            <h1>Welcome, I am <span className='text-warning'>Milan</span></h1>
            <br />
            <p className='text-info mb-5'> <i>I'm software Developer From Nepal.</i></p>

            <div className='container'>
                <h4 className='mb-4'>My github stats:</h4>
                <p className="git-lang  mx-5"><img src="https://github-readme-stats.vercel.app/api/top-langs?username=milan88888&show_icons=true&locale=en&layout=compact" alt="milan88888" /></p>

                <p className='git-lang'>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=milan88888&show_icons=true&locale=en" alt="milan88888" /></p>

                <p className='my-5'><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=milan88888&" alt="milan88888" /></p>
            </div>
            <div className='container'> <h3 className='mt-4 mb-3'>Connect with me:</h3>
                <p align="">
                    <a href="https://codepen.io/mkr07" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg" alt="mkr07" height="30" width="40" /></a>&nbsp;&nbsp;
                    <a href="https://dev.to/milan88888" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg" alt="milan88888" height="30" width="40" /></a>&nbsp;&nbsp;
                    <a href="https://twitter.com/i_am_mkr" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="i_am_mkr" height="30" width="40" /></a>&nbsp;&nbsp;
                    <a href="https://linkedin.com/in/milan-chaudhary-80491b257" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="milan-chaudhary-80491b257" height="30" width="40" /></a>&nbsp;&nbsp;
                    <a href="https://fb.com/ma.tmro.milan" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="ma.tmro.milan" height="30" width="40" /></a>&nbsp;&nbsp;
                    <a href="https://www.hackerrank.com/sttmkrr" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="sttmkrr" height="30" width="40" /></a>&nbsp;&nbsp;
                </p></div>
        </div>

    )
}
export default Home;