import React,{useState} from 'react';
import data from '../data.json';
import {useHistory} from 'react-router-dom';

function Participations() {
    const history = useHistory();
    const [certs,setCerts] = useState([]);
    useState(()=>{
        var parts = data.participations.sort((a,b)=>(a.year>b.year)?-1:0);
        setCerts(data.participations.sort((a,b)=>(a.year>b.year)?-1:0));
    },[]);
    return (
        <div>
            <div>
                <div class="d-flex flex-row-reverse bd-highlight navcontainer">
                    <div class="p-2 bd-highlight"><span className="navtext" ><a href="https://drive.google.com/file/d/137mNia5Qp_aQqa-TBjmhsKmuAcfqvu8d/view" target="_blank">Resume</a></span></div>
                    <div class="p-2 bd-highlight"><span className="navtext" onClick={()=>{
                        history.push("/");
                    }}>Home</span></div>
                </div>
            </div>
            <h1 className="headingcolor2 headingSize1 part_heading">Participations & Achievements</h1>
            <h4 className="headingcolor1 certpage_sideheading">List of events I participated & some of the certifications I have done from my college life</h4>
            <div>
                <div className="container headingcolor3 part_project_table">
                    <div className="row part_tabheading headingcolor3">
                        <div className="col d-none d-lg-block">Year</div>
                        <div className="col">Name</div>
                        <div className="col-6">Description</div>
                    </div>
                    {
                        certs.map(cert=>(
                            <div className="row headingcolor2 part_row">
                                <div className="col d-none d-lg-block">{cert.year}</div>
                                <div className="col headingcolor1 part_name">{cert.name}</div>
                                <div className="col-6">{cert.description}</div>
                                <div className="d-lg-none"><hr></hr></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Participations
