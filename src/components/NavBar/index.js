import React, { useEffect, useState } from 'react';
import './NavBar.css'
const Navbar = () => {
  const [show,setShow]= useState(false)
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      setShow(window.scrollY > 100)
    })
  },[])
  return (
    <div  
    className={`navbar-container ${show && 'navbar-container-black'}`}>
      <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/1920px-Netflix_2014_logo.svg.png"
      className='navbar-logo'alt='netflix logo'/>
      <img 
      src="https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg" className='navbar-avatar' alt='logo avatar'/>
    </div>
  );
}

export default Navbar;
