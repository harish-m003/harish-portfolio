import React from 'react';
import './Profile.css';
import profile from '../ImagesLogo/myimage.JPG';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div id='home' className='profile'>
            <img src={profile} alt=''/>
            <span> Hi, I'm Harish,</span>
            <h1>Junior Front-End Developer.</h1>
            <div className="profile-action">
                <Link className='profile-resume' to='https://docs.google.com/document/d/1CMF20dCMZKnFSUjEh-Gu8XzyMDCAcNC6/edit?usp=drivesdk&ouid=107946068054662047795&rtpof=true&sd=true'>
                My Resume</Link>
            </div>
        </div>
    )
}

export default Profile