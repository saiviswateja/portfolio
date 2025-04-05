import React, { useState } from 'react';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import GitHubIcon from '@material-ui/icons/GitHub';
import data from '../data.json';
import {useHistory} from 'react-router-dom';

function Publications() {
    const [publications,setPublications] = useState([]);
    const history = useHistory();
    useState(()=>{
        setPublications(data.publications.slice(0,6));
    },[]);
    return (
        <div>
            <div className="projectContainer">
                    <div className="row">
                        <h2 className="headingcolor2 d-flex justify-content-center">Noteworthy Projects</h2>
                        <h5 className="headingcolor1 d-flex justify-content-center archieveproject" onClick={()=>{
                            history.push("/publications")
                        }}>view all articles</h5>
                    </div>
                    <div className="projectsHolder">
                        {
                            publications.map(publication=>(
                                <div className="card projectcard">
                                    <div className="projectcard_firstrow headingcolor2">
                                        <div><a href={publication.url}><FolderOpenIcon fontSize="large"></FolderOpenIcon></a></div>
                                    </div>
                                    <h3 className="headingcolor2 projectheading">{publication.name}</h3> 
                                    <p className="projectdescription">{publication.description}</p>
                                </div>
                            ))
                        }
                    </div>
            </div>
        </div>
    )
}

export default Publications;
