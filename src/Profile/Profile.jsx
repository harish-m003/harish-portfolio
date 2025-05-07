import React from 'react';
import './Profile.css';
import photo from "../ImagesLogo/myimage.JPG";
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div id='home' className='profile'>
            <img src={photo} alt=''/>
            <span> Hi, I'm Harish,</span>
            <h1>Junior Front-End Developer.</h1>
            <div className="profile-action">
                <Link className='profile-resume' to='https://drive.google.com/file/d/1SOX5Pxczt4u0MOgNpXgg3GxLn_Y4amt1/view?usp=drivesdk'>
                My Resume</Link>
            </div>
        </div>
    )
}

export default Profile