import React,{useState} from 'react';
import data from '../data.json';
import GitHubIcon from '@material-ui/icons/GitHub';
import {useHistory} from 'react-router-dom';

function Certifications() {
    const [projects,setProjects] = useState([]);
    const history = useHistory();
    useState(()=>{
        setProjects(data.projects);
    },[]);
    return (
        <div>
            <div>
                <div class="d-flex flex-row-reverse bd-highlight navcontainer">
                    <div class="p-2 bd-highlight"><span className="navtext"><a href="https://drive.google.com/file/d/137mNia5Qp_aQqa-TBjmhsKmuAcfqvu8d/view" target="_blank">Resume</a></span></div>
                    <div class="p-2 bd-highlight"><span className="navtext" onClick={()=>{
                        history.push("/");
                    }}>Home</span></div>
                </div>
            </div>
            <h1 className="headingcolor2 headingSize1 part_heading">Archive</h1>
            <h4 className="headingcolor1 certpage_sideheading">List of things I have worked on</h4>
            <div>
                <div className="container headingcolor3 part_project_table">
                    <div className="row part_tabheading headingcolor1">
                        <div className="col-4 d-flex justify-content-center archieve_title">Title</div>
                        <div className="col d-flex justify-content-center d-none d-lg-block">Made For</div>
                        <div className="col d-flex justify-content-center">Link</div>
                        <div className="col-4 d-flex justify-content-center">Built with</div>
                    </div>
                    {
                        projects.map(project=>
                            <div className="row cert_projectcol">
                                <div className="col-4 d-flex justify-content-center cert_projectname">{project.name}</div>
                                <div className="col d-flex justify-content-center d-none d-lg-block">self</div>
                                <div className="col d-flex justify-content-center"><a href={project.githuburl}><GitHubIcon/></a></div>
                                <div className="col-4 d-flex justify-content-center cert_projectdesc">{project.technologies.join("-")}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Certifications
