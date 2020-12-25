import React from 'react';

function Technology() {
    return (
        <div>
            <div className="row technologyheader">
                <h2 className="headingcolor2 d-flex justify-content-center">What I've Worked</h2>
                <hr className="headingcolor2"></hr>
            </div>
            <div className="row">
                <div className="col-8">
                    <div className="card techcard"> 
                        <div className="row">
                            <div className="col">
                                <ul className="list">
                                    <li className="bullet"><span className="headingcolor2">Java</span></li>    
                                    <li className="bullet"><span className="headingcolor2">Python</span></li> 
                                    <li className="bullet"><span className="headingcolor2">C</span></li> 
                                    <li className="bullet"><span className="headingcolor2">ReactJS</span></li> 
                                    <li className="bullet"><span className="headingcolor2">MySQL</span></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="list">
                                    <li className="bullet"><span className="headingcolor2">HTML</span></li>    
                                    <li className="bullet"><span className="headingcolor2">CSS</span></li> 
                                    <li className="bullet"><span className="headingcolor2">JavaScript</span></li> 
                                    <li className="bullet"><span className="headingcolor2">NodeJS</span></li>
                                    <li className="bullet"><span className="headingcolor2">mongoDB</span></li>   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card techcard">
                        <ul className="list">
                            <li className="bullet"><span className="headingcolor2">Postman</span></li>   
                            <li className="bullet"><span className="headingcolor2">Microsoft Flow</span></li> 
                            <li className="bullet"><span className="headingcolor2">Visual Studio Code</span></li> 
                            <li className="bullet"><span className="headingcolor2">Git</span></li> 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology;
