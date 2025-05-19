import React from 'react'
import "./Navbar.scss" 
import Sidebar from '../sidebar/Sidebar'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar/>
      <div className='wrapper'>
           <motion.span initial={{opacity:0,scale:0.5}}
           animate={{opacity:1,scale:3}}
           transition={{duration:2}}>welcome To THE WEBSITE</motion.span>
           <div className='social'>
             <a href='https://github.com/CaptainTejass' target="_blank" ><img  id="first" src='./github.jpg'></img></a>
             <a href='https://www.instagram.com/captain_tejass/' target="_blank" ><img src='./instagram.png'></img></a>
             <a href='https://www.linkedin.com/in/captaintejas/' target="_blank" ><img src='./linkedin.jpg'></img></a>
           </div>
      </div>
    </div>
  )
}

export default Navbar