import React, { useRef } from 'react'
import "./Services.scss"
import{animate, motion,useInView} from "framer-motion"


const variants={
  initial:{
     x:-500,
     opacity:0,
     y:100,
  },
  animate:{
    x:0,
    opacity:1,
    y:0,

    transition:{
        duration: 1,
        staggerChildren:0.1,


    }

  },
};

const Services = () => { 
    const ref = useRef()
    const isInView = useInView(ref,{margin:"-100px"})  

  return (
    <motion.div className='services' variants={variants}  initial="initial" 
    //animate="animate"
    //whileInView="animate"
    ref={ref} animate ={isInView && "animate"}
    >
        <motion.div className='textContainer' variants={variants}>
            <p>FOCUS ON YOUR BRAND GROW <br/> AND MOVE FORWARD</p>
            <hr/>
        </motion.div>
        <motion.div className='titleContainer' variants={variants}>
            <div className='title' >
                <img src='/people.webp'/>
                <h1><motion.b whileHover={{color:'orange'}}>UNIQUE </motion.b> IDEAS</h1>
            </div>
            <div className='title' >
                <h1><motion.b whileHover={{color:'orange'}} >FOR YOUR </motion.b> BUSINESS</h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className='listContainer' variants={variants}>
            <motion.div className='box'  >
                <h2>FRONTEND DEVELOPMENT</h2>
                <p>Intuitive frontend designs tailored to your brand. Let our experienced frontend developers bring your digital vision to life.</p>
                <button>GO !</button>
            </motion.div>
            <motion.div className='box' >
                <h2>BACKEND DEVELOPMENT</h2>
                <p>Elevate your business operations with robust backend solutions tailored to your specific needs.
                   Our expert backend developers ensure seamless performance, scalability, and security.</p>
                <button>GO !</button>
            </motion.div>
            <motion.div className='box' >
                <h2>FULLSTACK DEVELOPMENT</h2>
                <p>Unlock your full potential with our comprehensive fullstack development services. Seamlessly integrate frontend and backend technologies to create dynamic, user-centric web applications that drive growth and innovation for your business.</p>
                <button>GO !</button>
            </motion.div>
            
            <motion.div className='box' >
                <h2>UI / UX DESIGNING</h2>
                <p>Our expert designers blend creativity with user-centric principles to deliver intuitive and visually stunning experiences that leave a lasting impression.</p>
                <button>GO !</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services