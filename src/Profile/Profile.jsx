import React from 'react';
import './Profile.css';
// import profile from '../ImagesLogo/myimage.JPG';
import photo from "../ImagesLogo/photo.jpg";
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div id='home' className='profile'>
            <img src={photo} alt=''/>
            <span> Hi, I'm Harish,</span>
            <h1>Junior Front-End Developer.</h1>
            <div className="profile-action">
                <Link className='profile-resume' to='https://drive.google.com/file/d/1JoVcn9e02iIRUYO0oOuJ0uCl4VRoafag/view?usp=drivesdk'>
                My Resume</Link>
            </div>
        </div>
    )
}

export default Profile