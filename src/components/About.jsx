import React from 'react'
import './About.css'
import me from "../Images/me.jpg"

function About() {
    return (
        <div className="aboutcontainer">
            <h2 className="abouttitle"> About Me</h2>
            <div className="aboutdesc">
                <div className="aboutright">
                    <div className="abtcard">
                    <img src={me} alt="" className="me"/>
                    </div>
                   
                </div>
                <div className="aboutleft">
                    <p className="aboutsub">
                        Hello there, I am a tech enthusiast with a keen interest in Blockchain
                        Technology, Cybersecurity, Artificial Technology and Mobile Development.
                    </p>
                    <p className="descabt">
                        I build mobile apps using Java and firebase and I am experienced in building and developing webapps and websites using react js for
                        frontend development Am skilled in UI/UX designing using figma.<br/>
                        <p className="descabt">
                        Curiosity is what shaped my journey into the Tech world and also seeing my father's
                        natural talent of fixing up things on his own. I wanted to emulate this talent and be able to
                        build my own products.
                        Am skiled in software benchmarking,Mobile Development, Front-end webdevelopment and Database Management
                        </p>
        
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default About
