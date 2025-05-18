import React from 'react'
import "./Hero.scss"
import "../contact/Contact"
import {motion} from "framer-motion"
const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
           duration:1,
           staggerChildren:0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:0,
            opacity:1,
           
            /*repeat:Infinity*/
        }
    },
}
const sliderVariants={
    initial:{
        x:0,
                
    },
    animate:{
        x:"-600%",
        
        transition:{
           duration:10,
           repeat:Infinity,
           repeatType:"mirror",
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    },
}
const Hero = () => {
  return (
    <div className="hero">
      <div className='wrapper'>
        <motion.div className='textContainer' variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>~ TEJAS NIM</motion.h2>
            <motion.h1 variants={textVariants}>web Developer & Data Analyst</motion.h1>
            <motion.div className='buttons' variants={textVariants}>
              <motion.button variants={textVariants}>see the latest work</motion.button>
              <motion.button variants={textVariants}>Contact me</motion.button>
            </motion.div> 
            <motion.img variants={textVariants} animate="scrollButton" src='/scroll.png'/>
        </motion.div>
      </div>
      <motion.div className='sliding_text__container' variants={sliderVariants} initial="initial" animate="animate">
         WEB DEVELOPER || DATA ANALYST || UI/UX
      </motion.div>
      <div className="imageContainer">
            <img  className='heroImg' src="public\myphoto.png" alt =""/>
      </div>

    </div>
  )
}

export default Hero 