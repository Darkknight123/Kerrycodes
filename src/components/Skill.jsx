import React from 'react'
import './Skill.css'
import html from "../Images/html.svg"
import android from "../Images/android.svg"
import css from "../Images/css.svg"
import flask from "../Images/flask.svg"
import java from "../Images/java.svg"
import javascript from "../Images/javascript.svg"
import linux from "../Images/linux.jpeg"
import python from "../Images/python.svg"
import react from "../Images/react.svg"
import sql from "../Images/sql.svg"

function Skill() {
    return (
        <div className="skillscontainer">
            <h2 className="skilltitle">
                Languages & Technolgies
            </h2>
            <div className="carded">
            <div className="skillcard">
                <img src={html} alt="" className="lanlogo"/>
            </div>
            <div className="skillcard">
                <img src={css} alt="" className="lanlogo"/>
            </div>
            <div className="skillcard">
                <img src={javascript} alt="" className="lanlogo"/>
            </div>
            <div className="skillcard">
                <img src={react} alt="" className="lanlogo"/>
            </div>
            <div className="skillcard">
                <img src={sql} alt="" className="lanlogo"/>
            </div>
            <div className="skillcard">
                <img src={android} alt="" className="lanlogo"/>
            </div>
            <div className="skillcard">
                <img src={java} alt="" className="lanlogo"/>
            </div>
            <div className="skillcard">
                <img src={python} alt="" className="lanlogo"/>
            </div>
            <div className="skillcard">
                <img src={flask} alt="" className="lanlogo"/>
            </div>
            <div className="skillcard">
                <img src={linux} alt="" className="lanlogo"/>
            </div>
            </div>
          
        </div>
    )
}

export default Skill
