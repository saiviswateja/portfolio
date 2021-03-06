import React, { useState } from 'react';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import GitHubIcon from '@material-ui/icons/GitHub';
import data from '../data.json';
import {useHistory} from 'react-router-dom';

function Projects() {
    const [projects,setProjects] = useState([]);
    const history = useHistory();
    useState(()=>{
        setProjects(data.projects.slice(0,6));
    },[]);
    return (
        <div>
            <div className="projectContainer">
                    <div className="row">
                        <h2 className="headingcolor2 d-flex justify-content-center">Noteworthy Projects</h2>
                        <h5 className="headingcolor1 d-flex justify-content-center archieveproject" onClick={()=>{
                            history.push("/projects")
                        }}>view the archive</h5>
                    </div>
                    <div className="projectsHolder">
                            {
                            projects.map(project=>(
                                <div className="card projectcard">
                                    <div className="projectcard_firstrow headingcolor2">
                                        <FolderOpenIcon fontSize="large"></FolderOpenIcon>
                                        <div><a href={project.githuburl}><GitHubIcon fontSize="large"></GitHubIcon></a></div>
                                    </div>
                                    <h3 className="headingcolor2 projectheading">{project.name}</h3> 
                                    <p className="projectdescription">{project.description}</p>   
                                    <div className="d-flex justify-content-between headingcolor3 projecttechnologies">
                                        {
                                            project.technologies.map(tech=>(
                                                <div>{tech}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            </div>
        </div>
    )
}

export default Projects;
