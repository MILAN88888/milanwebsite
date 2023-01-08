import React from 'react'

const About = (props) => {
    return (
        <>
     <section className="main-content mt-5 mb-5">
                <div className="container">
                    <div id="content" className="container" role="main">
                        <div className="row py-5 mt-4 justify-content-between container">
                            <div className="col-md-6 pr-lg-6 mb-5 mb-md-0">
                                <img  src={props.pic.myImage} alt="..."
                                    className="img-fluid mb-3 d-md-block myImage" />
                                    <p><i>Hi, I am Milan Kumar Chaudhary. Currently, I am living in Kathmandu, Nepal. I have studied Computer Sceince and Engineering from VTU University in December 2020. I love new challenges, ideas and project tasks. Beside of these I like playing game.If you want contact, Don't hegitate to contact for anything project help, ideas, games, news etc.
                                    </i></p>    
                            </div>
                            <div className="pl-6 col-md-6 col-lg-6 ml-auto formRegister container">
                                <div className="mb-4 container">
                                    <h4>Milan Kumar Chaudhary</h4>
                                </div>
                                <div className="mb-4 mt-4 container">
                                    <p className='inputGreyborder-md border-left-0 pl-3 text-warning'>I'm software developer.</p>
                                </div>
                                <div className="mb-4 mt-4 container">
                                    <h4>Skills</h4>
                                </div>
                                <div className="mb-4 mt-4 container">
                                    <p><a href='https://www.w3schools.com/html/' ><img alt='..' src={props.pic.htm} style={{ height: "3 0px" }} /></a>&nbsp;
                                        <a href='https://www.w3schools.com/css/' ><img alt='..' src={props.pic.cs} style={{ height: "40px" }} /></a>&nbsp;
                                        <a href='https://www.w3schools.com/js/js_es6.asp' ><img alt='..' src={props.pic.jas} style={{ height: "40px" }} /></a>&nbsp;
                                        <a href='https://dev.java/learn/' ><img alt='..' src={props.pic.java} style={{ height: "40px" }} /></a>&nbsp;
                                        <a href='https://docs.python.org/3/tutorial/index.html' ><img alt='..' src={props.pic.python} style={{ height: "40px" }} /></a>&nbsp;
                                        <a href='https://www.php.net/' ><img alt='..' src={props.pic.ph} style={{ height: "40px" }} /></a>&nbsp;
                                        <a href='https://v5.reactrouter.com/web/guides/philosophy' ><img alt='..' src={props.pic.react} style={{ height: "40px" }} /></a>&nbsp;
                                        <a href='https://laravel.com/docs/9.x' ><img alt='..' src={props.pic.laravel} style={{ height: "40px" }} /></a></p>
                                </div>
                                <div className="mb-4 mt-4 container">
                                    <h4>Tools</h4>
                                </div>
                                <div className="mb-4 mt-4 container">
                                    <p>
                                        <a href='https://code.visualstudio.com/' ><img alt='..' src={props.pic.vscode} style={{ height: "40px" }} /></a>&nbsp;
                                        <a href='https://www.sublimetext.com/' ><img alt='..' src={props.pic.sublime} style={{ height: "40px" }} /></a>&nbsp;
                                        <a href='https://git-scm.com/downloads' ><img alt='..' src={props.pic.git_bash} style={{ height: "40px" }} /></a>&nbsp;
                                        <a href='https://filezilla-project.org/' ><img alt='..' src={props.pic.filezilla} style={{ height: "40px" }} /></a>&nbsp;
                                        <a href='https://www.jetbrains.com/pycharm/' ><img alt='..' src={props.pic.pycharm} style={{ height: "40px" }} /></a>&nbsp;
                                        <a href='https://www.postman.com/' ><img alt='..' src={props.pic.postman} style={{ height: "40px" }} /></a>&nbsp;
                                    </p>
                                </div>
                                {/* <div className="mb-4 mt-4 container">
                                    <h4>Projects</h4>
                                </div>
                                <div className="mb-4 mt-4 container">
                                    <ul className="text-info">
                                        <li>Library management in PHP</li>
                                        <li><a href='https://github.com/MILAN88888/Oxole'>BookXchange in PHP</a></li>
                                        <li><a href='https://github.com/MILAN88888/Laravel-BookXchange'>BookXchange using Laravel</a></li>
                                        <li><a href='https://github.com/MILAN88888/milanwebsite'>milankumarchaudhary.com.np</a> using React Js</li>
                                        <li><a href='https://github.com/MILAN88888/milanwebsite'>Wordpress User Registration plugin</a></li>
                                    </ul>
                                </div> */}
                                <div className="mb-4 mt-4 container">
                                    <h4>Connect with Me</h4>
                                </div>
                                <div className="mb-4 mt-4 container">
                                    <a href='https://github.com/MILAN88888'><img alt='..' src={props.pic.git} /></a>
                                    <a href="https://www.linkedin.com/in/milan-chaudhary-80491b257/"><img alt='..' src={props.pic.linkin} /></a>
                                    <a href='https://www.facebook.com/ma.tmro.milan/'><img alt='..' src={props.pic.facebook} /></a>
                                </div>
                                <div className="mb-4 mt-4 container">
                                    <h4>My Resume</h4>
                                </div>
                                <div className='mb-4 mt-4 container'>
                                    <a href={props.pic.milan_cv} download="milan_cv" className='btn '><img src={props.pic.cv} alt=".." /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>
            <div className='container contact-form' >
                <h3 className='mb-3 text-warning'>Contact Me</h3>
                <form className='col-lg-6 col-xl-6 col-sm-12'>
                    <label htmlFor='name' className='form-label'>Enter Your Name</label>
                    <input type="text" className='form-control' id='name' name='name' />
                    <label className='form-label' htmlFor='email'>Enter Your Email</label>
                    <input type="email" className='form-control' id='email' name='email' />
                    <label className='form-label' htmlFor='message' >Enter Your Message</label>
                    <textarea className='form-control' id='message' name='message'></textarea>
                </form>
                <button className='btn btn-primary mt-3 btn-lg  '>Send</button>
            </div>
            </section>
            </>
    )
}
export default About;