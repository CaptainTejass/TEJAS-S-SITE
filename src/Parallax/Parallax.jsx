import React , { useRef } from 'react'
import "./Parallax.scss"
import {motion,useScroll,useTransform} from "framer-motion"

const Parallax = ({type}) => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({
      target: ref,
      offset: ["start start","end start"]
  });
  
  const yText = useTransform(scrollYProgress,[0, 1],["0%","100%"]);

  const yBg = useTransform(scrollYProgress,[0, 1],["0%","300%"]);
  
  return (
    <div className="parallax" ref={ref} style={{background:type==="services" ? "linear-gradient(180deg, #111132, #0c0c1d)" :
                                                                 "linear-gradient(180deg, #111132, #505064)"}}>
      <motion.h1 className='bigFonts' style={{y : yText}}>{type === "services" ? "WHAT TO  DO" : "WHAT  WE  DID"}</motion.h1>
      <motion.div className='mountains'></motion.div>
      <motion.div  className='planet' style ={{ backgroundImage:`url(${type==="services" ? "/planets.png" : "/sun.png"})`}}></motion.div>
      <motion.div style={{x : yBg}} className='stars'>
        <div className='star1'></div>
        <div className='star2'></div>
      </motion.div>
    </div>
  )
}

export default Parallax
/*
const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start","end start"]
    });
    
    const yText = useTransform(scrollYProgress,[0, 1],["0%","100%"]);

    const yBg = useTransform(scrollYProgress,[0, 1],["0%","300%"]);
    
    return (
      <div className="parallax" ref={ref} style={{background:type==="services" ? "linear-gradient(180deg, #111132, #0c0c1d)" :
                                                                   "linear-gradient(180deg, #111132, #505064)"}}>
        <motion.h1 style={{y : yText}}>{type === "services" ? "WHAT TO  DO" : "WHAT  WE  DID"}</motion.h1>
        <motion.div className='mountains'></motion.div>
        <motion.div  className='planet' style ={{y : yBg , backgroundImage:`url(${type==="services" ? "/planets.png" : "/sun.png"})`}}></motion.div>
        <motion.div style={{x : yBg}} className='stars'></motion.div>
      </div>
    )
    */