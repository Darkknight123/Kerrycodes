import React from 'react'
import './ProjectCard.css'

function ProjectCard({title,imageUrl,des,live,github}) {
    return (
        <div className="cardcontainer">
            <div className="imgcontainer">
                <img src={imageUrl} alt=''/>
            </div>
            <div className="cardinfo"><div className="cardtle">
                <h3>{title}</h3>
            </div>
            <div className="cardbdy">
                <p className='cardtxt'>{des}</p>
            </div>
            <div className="prjbtn">
                <button className="live">
                    Live {live}
                </button>
                <button className='git'>
                   github {github}
                </button>
            </div>
            </div>
            
        </div>
    )
}

export default ProjectCard
