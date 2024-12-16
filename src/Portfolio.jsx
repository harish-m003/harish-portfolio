import React from 'react';
import Navbar from './Navbar/Navbar';
import './Index.css';
import Profile from './Profile/Profile';
import About from './About/About';
import Skills from './Skills/Skills';
import Project from './Project/Project';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';


function Portfolio() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Profile/>}/> 
        </Routes>
        <About />
        <Skills />
        <Routes>
          <Route path='/' element={<Project />} />
        </Routes>
        <Contact/>
        <Footer/>
      </Router>
    </>
  )
}

export default Portfolio