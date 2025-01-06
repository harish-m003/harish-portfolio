import React, { useRef } from 'react';
import './Navbar.css';
import logo from '../ImagesLogo/logo1.jpeg';
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


function Navbar() {

  const [menu,setmenu]=useState('home')
  const menuref=useRef()

  const menuopen=()=>{
    menuref.current.style.right='0'
  }
  const menuclose=()=>{
    menuref.current.style.right='-350px'
  }
  return (
    <div>
      <div className='nav-bar'>
        <img src={logo} alt='' />
        <FontAwesomeIcon icon={faBars} className='nav-mob-open' onClick={menuopen}/>
        <ul className='nav-menu' ref={menuref}>
          <FontAwesomeIcon icon={faTimes} className='nav-mob-close' onClick={menuclose} />
          <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setmenu('home')}>Home</p></AnchorLink>{menu==='home'?<hr className='underline'/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setmenu('about')}>About Me</p></AnchorLink>{menu==='about'?<hr className='underline'/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p  onClick={()=>setmenu('skills')} >Skills</p></AnchorLink>{menu==='skills'?<hr className='underline'/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p  onClick={()=>setmenu('projects')}>Projects</p></AnchorLink>{menu==='projects'?<hr className='underline'/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p  onClick={()=>setmenu('contact')}>Contact</p></AnchorLink>{menu==='contact'?<hr className='underline'/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
      </div>

    </div>
  )
}

export default Navbar;