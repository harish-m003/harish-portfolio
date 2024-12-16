import React from 'react';
import './Skill.css';
import htmlicon from '../ImagesLogo/html-5.png';
import reacticon from '../ImagesLogo/atom.png';
import jsicon from '../ImagesLogo/js.png';
import pythonicon from '../ImagesLogo/python.png';
import cssicon from '../ImagesLogo/css-3.png';
import vsicon from '../ImagesLogo/vscode.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Skills() {
    return (
        <div id='skills' className='about-page' >
             <h1 >Skills</h1>
            <div className="about-skills">
                <div className="about-skill">
                    <p><img  className='skills-icons' src={htmlicon} alt=''  />HTML</p><hr className='skill-width' style={{ width: '67%' }} />
                </div>
                <div className="about-skill">
                    <p><img  className='skills-icons' src={cssicon} alt='' />CSS</p><hr className='skill-width' style={{ width: '65%' }} />
                </div>
                <div className="about-skill">
                    <p><img className='skills-icons' src={jsicon} alt=''  />JavaScript</p> <hr className='skill-width' style={{ width: '59%' }} />
                </div>
                <div className="about-skill">
                    <p><img  className='skills-icons'src={reacticon} alt=''  />React JS</p><hr className='skill-width'style={{ width: '64%' }} />
                </div>
            </div>
            <div className="other-skills">
                <div className="other-skill">
                    <img src={pythonicon} alt='' className='other-sicon' /> <hr/>
                </div>
        
                <div className="other-skill">
                    <img src={vsicon} alt='' className='other-sicon' /><hr/>
                </div>
                <div className="other-skill">
                    <FontAwesomeIcon icon={faGithub}  className='gitimg' /><hr />
                </div>
            </div>
        </div>
    )
}

export default Skills