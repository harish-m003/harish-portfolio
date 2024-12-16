import React from 'react';
import './Profile.css';
import profile from '../ImagesLogo/profile.jpg';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div id='home' className='profile'>
            <img src={profile} alt=''/>
            <span> Hi, I'm Harish,</span>
            <h1>Junior Front-End Developer.</h1>
            <div className="profile-action">
                <Link className='profile-resume'  to=''>My Resume</Link>
            </div>
        </div>
    )
}

export default Profile