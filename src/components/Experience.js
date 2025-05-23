import React,{useEffect, useState} from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import data from '../data.json';

function Experience() {
    const [exp,setExp] = useState("vl");
    const [currentExp,setCurrentExp] = useState({"workingpoints":[]});
    useEffect(()=>{
        var experiences = data.experiences;
        var tempExperience = experiences.filter((experience)=>{
             if(experience._id===exp){
                 return true;
             }
             return false;
         });
         setCurrentExp(tempExperience[0])
    },[exp])
    const onExpClicked = (e)=>{
        setExp((document.getElementById(e).getAttribute("name")));
    }
    return (
        <div className="container">
                        <div className="row">
                            <h2 className="headingcolor2 d-flex justify-content-center">Where I've Worked</h2>
                            <hr className="headingcolor2"></hr>
                        </div>
                        <div className="container">
                            <div className="row">
                            <div className="col experienceLink" onClick={()=>onExpClicked("manhattan")} id="manhattan" name="manhattan">Manhattan Associates</div>
                            <div className="col experienceLink" onClick={()=>onExpClicked("vl")} id="vl" name="vl">ValueLabs</div>
                            <div className="col experienceLink" onClick={()=>onExpClicked("vlintern")} id="vlintern" name="vlintern">ValueLabs Intern</div>
                            <div className="col experienceLink" onClick={()=>onExpClicked("tpcoord")} id="tpcoord" name="tpcoordinator">Training & Placement Coordinator</div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="card experienceCard">
                                <div className="headingcolor1 experienceHeading"><span className="headingcolor2">{currentExp.role}</span> {currentExp.company}</div>
                                <span className="headingcolor1 experienceDate"><DateRangeIcon/> {currentExp.duration}</span>
                                    <ul className="list">
                                        {
                                        currentExp.workingpoints.length!==0 &&
                                        currentExp!=="undefined" && currentExp.workingpoints.map(point=>(
                                            <li className="bullet"><span className="headingcolor2">{point}</span></li>    
                                        ))
                                        }
                                    </ul>
                            </div>
                        </div>
                    </div>
    )
}

export default Experience
