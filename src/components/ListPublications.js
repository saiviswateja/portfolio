import React,{useState} from 'react';
import data from '../data.json';
import GitHubIcon from '@material-ui/icons/GitHub';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

import {useHistory} from 'react-router-dom';

function ListPublications() {
    const [publications,setPublications] = useState([]);
    const history = useHistory();
    useState(()=>{
        setPublications(data.publications);
    },[]);
    return (
        <div>
            <h1 className="headingcolor2 headingSize1 part_heading">Articles</h1>
            <h4 className="headingcolor1 certpage_sideheading">List of articles I have published</h4>
            <div>
                <div className="container headingcolor3 part_project_table">
                    <div className="row part_tabheading headingcolor1">
                        <div className="col-4 d-flex justify-content-center archieve_title">Title</div>
                        <div className="col d-flex justify-content-center">Link</div>
                    </div>
                    {
                        publications.map(publication=>
                            <div className="row cert_projectcol">
                                <div className="col-4 d-flex justify-content-center cert_projectname">{publication.name}</div>
                                <div className="col d-flex justify-content-center"><a href={publication.url}><FolderOpenIcon/></a></div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ListPublications
