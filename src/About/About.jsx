import React from 'react';
import './About.css';
import aboutimg from '../ImagesLogo/myimage.JPG';
function About() {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me </h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={aboutimg} alt='' />
                </div>
                <div className="about-right">
                <div className='about-para' >
                {aboutme.map((a) => (
                        <p key={a.id}>{a.about}</p>
                        ))}
                </div>
                </div>
            </div>
        </div>
    )
}
const aboutme = [
    {
        id: 1,
        about:'I am a passionate front-end developer with a strong enthusiasm for building engaging and acessible web application.With a solid understanding of core web technologies like HTML,CSS, and JavaScript,I have completed several projects that highlight my skills in responsive design and user interface development.'
    },
    {
        id: 2,
        about:'My journey into web development began with a fascination for how websites are built and function. This curiosity led me to embark on various projects, where I enjoy solving challenges while continuously learning about new technologies and best practices in front-end development.'
    },
    {
        id: 3,
        about:'I am excited to collaborate with others and work as part of a team to contribute to innovative projects that push the boundaries of web design. In my spare time, I love exploring design trends, tackling coding challenges, and sharing my knowledge through a personal blog.'
    }
]

export default About