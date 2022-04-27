import React from 'react';
import {useHistory} from 'react-router-dom';

function Navbar() {
    const history = useHistory();
    return (
        <div>
            <div class="d-flex flex-row-reverse bd-highlight navcontainer">
                <div class="p-2 bd-highlight"><span className="navtext"><a href="https://drive.google.com/file/d/1tfyxLwlpAatGEwB1z07kcCXziTsYgXE6/view?usp=sharing" target="_blank">Resume</a></span></div>
                <div class="p-2 bd-highlight"><span className="navtext" onClick={()=>{
                    history.push("/participations");
                }}>Participations</span></div>
            </div>
        </div>
    )
}

export default Navbar;
