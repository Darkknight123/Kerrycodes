import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbarcontainer">
            <div className="Left">
                Philip Kerry
            </div>
            <div className="Right">
                <div className="itemright">About</div>
                <div className="itemright">Skills</div>
                <div className="itemright">Projects</div>
                <div className="itemright">Contact</div>
            </div>
        </div>
    )
}

export default Navbar
