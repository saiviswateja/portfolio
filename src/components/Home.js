import React from 'react';
import '../App.css';
import profile_pic from './profile_pic.jpg';
import Experience from './Experience';

function Home() {
    return (
        <div>
                    <div className="row">
                    <div className="headingContainer">
                        <h5 className="headingcolor1">Hi, my name is</h5>
                        <h1 className="headingcolor2 headingSize1">Sai Viswa Teja</h1>
                        <h1 className="headingcolor3 headingSize1">I build things for the web.</h1>
                        <div className="row">
                        <h5 className="headingcolor4 col-md-6">I am a Software Engineer working currently in esteemed
                        organisation named ValueLabs. I am very passinate about computers</h5>
                    </div>
                         <button className="getInTouch">Get In Touch</button>
                    </div>
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-md-6 offset-md-1">
                            <h2 className="headingcolor2">About Me<hr></hr></h2>
                            <h5 className="headingcolor4">Hello! I'm Brittany, a software engineer based in Boston, MA.
                            <br></br>
                            <br></br>
                            I enjoy creating things that live on the internet, whether  that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
                            <br></br>
                            <br></br>
                            Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.</h5>
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
        </div>
    )
}

export default Home
