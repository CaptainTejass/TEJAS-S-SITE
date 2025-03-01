import React from 'react'
import { useRef } from 'react'
import "./Portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion"



const items=[
    {
        id:1,
        title:"NIKE DESIGN",
        img:"/nike.png",
        desc:"UI/UX..  DESIGNED THIS ANIMATED NIKE WEBSITE PAGE WITH FIGMA",
        link:"https://www.linkedin.com/posts/captaintejas_ui-activity-7144048768529711105-rYoX?utm_source=share&utm_medium=member_desktop"
    },
    {
        id:2,
        title:"DISCORD CLONE",
        img:"/discord.png",
        desc:"Crafted a responsive DISCORD CLONE with media queries for seamless adaptability across devices",
        link:"https://www.linkedin.com/posts/captaintejas_webdev-responsivedesign-activity-7118322565231575040-iC_t?utm_source=share&utm_medium=member_desktop"
    },
    {
        id:3,
        title:"E-COMMERCE WEB PAGE",
        img:"/modern_chair.png",
        desc:"I crafted a unique and imaginative e-commerce website's frontend entirely from scratch. ",
        link:"https://www.linkedin.com/posts/captaintejas_webdev-frontend-activity-7118343855023747072-uH1r?utm_source=share&utm_medium=member_desktop"
    },
    {
        id:4,
        title:"ANIMATION WEBSITE",
        img:"/animated.png",
        desc:"a captivating animated website that brings content to life as you scroll! 🚀 Using HTML, CSS, JavaScript, and React, I've created a seamless user experience with dynamic animations that engage and impress",
        link:"https://www.linkedin.com/posts/captaintejas_webdevelopment-animation-reactjs-activity-7121794056820523009-tAZs?utm_source=share&utm_medium=member_desktop"
    }
];

const Single=({item})=>{
    const ref =useRef()
    const {scrollYProgress}= useScroll({
        target:ref,
        /*offset: ["start start","end start"],*/
    });
    const y = useTransform(scrollYProgress,[0,1],[/*"0%"*/-150,/*"300%"*/150]);

    return(
       <section >
          <div className='container'>
             <div className='wrapper'>
               <div className='imgContainer'>
                 <img src={item.img} alt='img' ref = {ref}/>
               </div>
               <motion.div className='textContainer' style={{y}}>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <button><a href={item.link} target='blank'>VIEW</a></button>
               </motion.div>
             </div>
          </div>
       </section>
    )
};

const Portfolio = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end ","start start"],
    });
    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,

    });  
  return (
    <div className='portfolio' ref={ref}>
        <div className='progress'>
            <h1>Feature Works</h1>
            <motion.div style={{scaleX}} className='progressBar'></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio