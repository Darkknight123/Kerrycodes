import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbarcontainer">
            <div className="Left">
                Philip Kerry
            </div>
            <div className="Right">
                <div className="navhome">About</div>
                <div className="navskills">Skills</div>
                <div className="navprojects">Projects</div>
                <div className="navcontact">Contact</div>
            </div>
        </div>
    )
}

export default Navbar
