import React from 'react'
import {
    Link,
  } from "react-router-dom";

export const About = (props) => {
    
    return (
        <>
          <section class="main-content mt-5 mb-5">
	<div class="container">
		<div id="content" class="" role="main">
			<div class="row py-5 mt-4 justify-content-between">
				
				<div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
					
					
					<img src={props.pic.myImage} alt=""
						class="img-fluid mb-3 d-none d-md-block myImage" />
				</div>
			
				<div class="col-md-6 col-lg-6 ml-auto formRegister">
					
						
						<div class="mb-4">
							<h4>Milan Kumar Chaudhary</h4>
							
						</div>
					
						<div class="mb-4 mt-4">

                     
                            <p className='inputGreyborder-md border-left-0 pl-3 text-warning'>I'm software developer.</p>
							
						</div>
                        <div class="mb-4 mt-4">

                     
                            <h4>Skills</h4>
							
						</div>
                        <div class="mb-4 mt-4">
                        <p><img src={props.pic.htm} style={{height:"40px"}}/>&nbsp;
                        <img src={props.pic.cs}style={{height:"40px"}} />&nbsp;
                        <img src={props.pic.ph} style={{height:"40px"}} />&nbsp;
                        <img src={props.pic.jav} style={{height:"40px"}} />&nbsp;
                        <img src={props.pic.react} style={{height:"40px"}} />&nbsp;
                        <img src={props.pic.laravel} style={{height:"40px"}} /></p>
                        </div>
                        <div class="mb-4 mt-4">
                        <h4>Projects</h4>
                        </div>
                        <div class="mb-4 mt-4">
                        <ul className="text-info">
                            <li>Library management in PHP</li>
                            <li>BookXchange in PHP</li>
                            <li>BookXchange using Laravel</li>
                            <li>milankumarchaudhary.com.np using React Js</li>
                        </ul>
                        </div>
                        <div class="mb-4 mt-4">
                        <h4>Links</h4>
                        </div>
                        <div class="mb-4 mt-4">
                        <Link to=""><img src={props.pic.git}/></Link>
                        <Link to=""><img src={props.pic.linkin}/></Link>
                        <Link to=""><img src={props.pic.facebook}/></Link>
                        </div>
                        <div class="mb-4 mt-4">
                        <h4>Download CV</h4>
                        </div>
						
						
				
				</div>
			</div>
		</div>
	</div>
	
</section>
</>


        
    )
}
