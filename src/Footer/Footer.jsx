import React from 'react'
import './Footer.css'
// import Footerimg from '../ImagesLogo/logo2.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { Link } from 'react-router-dom'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


function Footer (){
    return(
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <h1>Harish</h1>
                    <p>Junior Front-End Developer.</p>
                </div>
            </div>
            <hr  className='footer-line'/>
            <div className="footer-bottom">
                <p className='footer-bottom-left'>@ 2024 M.Harish. All rights reserved. </p>
                <div className="footer-bottom-left">
                    {sociallink.map((l)=>(<Link key={l.id} to={l.link}>
                    <FontAwesomeIcon className='sociallink' icon={l.icon}/>
                    </Link>))}
                </div>
            </div>
        </div>
    )
}

const sociallink=[
    {id:1,
        link:'https://github.com/Harish-Fio',
        icon:faGithub
    },
    {id:2,
        link:'https://www.linkedin.com/in/harishm003/',
        icon:faLinkedin
    },
    {id:3,
        link:'https://www.instagram.com/know___him____/',
        icon:faInstagram
    }
]

export default Footer