import React from 'react';
import './Project.css';
import project1 from '../ImagesLogo/netflix landing project.png';
import project2 from '../ImagesLogo/mobstore project.png';
import { Link } from 'react-router-dom';

function Project() {
    return (
        <div id='projects' className='projects'>
            <div className="project-title">
                <h1>Projects</h1>
            </div>
            <div className="project-all" >
                {data.map((h) =>
                    <div className='project-boxes' key={h.id} >
                         <h4>{h.Name}</h4>
                        <div  className='project-lists'>
                            <img src={h.img} alt=''  />
                            <div className="project-info">
                                <p>{h.description}</p>
                                <div className='project-link'>
                                    <Link to={h.link}  className='project-links'>Preview</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

const data = [
    {
        id: 1,
        Name: 'Netflix Landing Page',
        img: project1,
        description: '"Netflix-style landing page built with React.js,featuring responsive design and interactive elements"',
        link:'https://netflix-loading-clonepage.web.app/'
    },
    {
        id: 2,
        Name: 'E-Commerce ',
        img:project2,
        description:'"A responsive website built using HTML,CSS,and JavaScript,designed for seamless mobile shopping."',
        link:'https://e-commercemobile-60033617032.development.catalystserverless.in/app/index.html'
    },
    {
        id: 3,
        Name: 'Netflix Landing Page',
        img: project2,
        link:''
    },
   
]

export default Project