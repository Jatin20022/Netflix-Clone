import React, { useEffect, useState } from 'react'
import './navbar.css'
function navbar() {
  const[show,handleShow]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>100){
        handleShow(true);
      }else handleShow(false);
    });
    return()=>{
      window.removeEventListener('scroll');
    }
  },[]);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
      className='nav_logo'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logonfx.png/1199px-Logonfx.png?20190424232034'
      alt='Netflix Logo'
     />
      <img
      className='nav_avtar'
      src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
      alt='Netflix Logo'
     />

      
    </div>
  )
}

export default navbar;
