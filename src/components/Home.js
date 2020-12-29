import React from 'react';
import '../App.css';
import profile_pic from './profile_pic.jpg';
import Experience from './Experience';
import Projects from './Projects';
import Technology from './Technology';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Navbar from './Navbar';

function Home() {
    return (
        <div>
                    <Navbar/>
                    <div className="row">
                    <div className="headingContainer">
                        <h5 className="headingcolor1">Hi, I am</h5>
                        <h1 className="headingcolor2 headingSize1">Sai Viswa Teja</h1>
                        <h1 className="headingcolor3">I'm not a great programmer,<br/>
                        I'm  just a good programmer with good habits</h1>
                        <div className="row">
                        {/* <h5 className="headingcolor4 col-md-6">I am a Software Engineer working currently in esteemed
                        organisation named ValueLabs. I am very passinate about computers</h5> */}
                    </div>
                    <a href="mailto:saiviswateja.teja@gmail.com"><button className="getInTouch">Get In Touch</button></a>
                    </div>
                    </div>
                    <div className="container aboutmecontainer">
                        <div className="row">
                        <div className="col-md-6 offset-md-1">
                            <h2 className="headingcolor2">About Me<hr></hr></h2>
                            <h5 className="headingcolor4">Hello! I'm Sai Viswa Teja Sreerama, a software engineer based in Hyderabad, India.
                            <br></br>
                            <br></br>
                            I enjoy creating things that live on the internet, whether  that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
                            <br></br>
                            <br></br>
                            Shortly after graduating from <span className="headingcolor1 desctag">G. Pulla Reddy College</span>, I joined the software team at <span className="headingcolor1 desctag">ValueLabs</span> where I work on a wide variety of interesting and meaningful projects on a daily basis.</h5>
                        </div>
                        <div className="col-md offset-ml-3 mt-5">
                            <div className="d-flex justify-content-center">
                            <img src={profile_pic} className="profile_pic" alt="Profile_Pic"></img>
                            </div>
                        </div>
                        </div>
                    </div>
                    <Experience/>
                    <div className="container education">
                        <div className="row">
                            <h2 className="headingcolor2 d-flex justify-content-center">Education</h2>
                            <hr className="headingcolor2"></hr>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <div className="card edCard">
                                    <div className="headingcolor1 d-flex justify-content-center eduCategory"><b>Bachelor of Technology</b></div>
                                    <div className="headingcolor2 d-flex justify-content-center">G. Pulla Reddy Engineering College</div>
                                    <div className="headingcolor3 d-flex justify-content-center">Computer Science and Engineering</div>
                                    <div className="headingcolor3 d-flex justify-content-center">2016 - 2020</div>
                                    <div className="headingcolor3 d-flex justify-content-center">CGPA: 8.43</div>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="card edCard">
                                    <div className="headingcolor1 d-flex justify-content-center eduCategory"><b>INTERMEDIATE</b></div>
                                    <div className="headingcolor2 d-flex justify-content-center">Narayana Junior College</div>
                                    <div className="headingcolor3 d-flex justify-content-center">Maths, Physics & Chemistry</div>
                                    <div className="headingcolor3 d-flex justify-content-center">2014 - 2016</div>
                                    <div className="headingcolor3 d-flex justify-content-center">Marks: 972</div>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="card edCard">
                                    <div className="headingcolor1 d-flex justify-content-center eduCategory"><b>HIGH SCHOOL</b></div>
                                    <div className="headingcolor2 d-flex justify-content-center">Montessori English Medium School</div>
                                    <div className="headingcolor3 d-flex justify-content-center">2009 - 2014</div>
                                    <div className="headingcolor3 d-flex justify-content-center">CGPA: 9.70</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Projects/>
                    <Technology/>
                    <div className="lastsection">
                        <h2 className="headingcolor2 last_heading">Get In Touch</h2>
                        <center><div className="last_desc headingcolor3">Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</div></center>
                    </div>
                    <a href="mailto:saiviswateja.teja@gmail.com"><div className="d-flex justify-content-center"><button className="last_button">say Hello!</button></div></a>
                    <div className="footer_section">
                        <div className="row">
                            <div className="col-md-8">
                            {/* <span className="headingcolor1 email .d-none .d-lg-block .d-xl-none">Email: </span><span className="headingcolor2 email">saiviswateja.teja@gmail.com</span> */}
                            </div>
                            <div className="col-md">
                            <div className="d-flex justify-content-around headingcolor2">
                                <a href="https://www.instagram.com/saiviswatejasreerama/?hl=en"><InstagramIcon fontSize="large" className="social_icon"></InstagramIcon></a>
                                <a href="https://www.facebook.com/people/Sreerama-Saiviswateja/100006781996664"><FacebookIcon fontSize="large" className="social_icon"></FacebookIcon></a>
                                <a href="https://github.com/saiviswateja"><GitHubIcon fontSize="large" className="social_icon"></GitHubIcon></a>
                                <a href="https://www.linkedin.com/in/sreerama-saiviswateja-270569123"><LinkedInIcon fontSize="large" className="social_icon"></LinkedInIcon></a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-lg-none hide_hr"><hr></hr></div>
                    <div className="d-lg-none hide_hr"><hr></hr></div>
        </div>
    )
}

export default Home
