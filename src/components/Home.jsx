import React from 'react'
import Intro from './Intro'
import Navbar from './Navbar'
import About from './About'
import Skill from './Skill'
import Projects from './Projects'
import Contact from './Contact'

function Home() {
    return (
        <div>
            <Navbar/>
            <Intro/>
            <About/>
            <Skill/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Home
