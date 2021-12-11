import React from 'react'
import "./Intro.css"
import  devop from "../Images/dev.svg"

function Intro() {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="hello">Hello, My name is</h2>
                    <h1 className="name">Philip Kerry</h1>
                    <div className="jobtitle">
                        <div className="titlewrapper">
                            <div className="titleitem">Front-End Web Developer</div>
                            <div className="titleitem">Android Developer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I design and develop products for customers of all sizes,specializing in creating modern
                        ,stylish websites and mobile apps. I help small businesses establish their prescence 
                        among others on the internet  
                    </div>
                </div>
            </div>
            <div className="i-right">
                <img src={devop} alt="devop" className="devimg"/>
            </div>
        </div>
    )
}

export default Intro
