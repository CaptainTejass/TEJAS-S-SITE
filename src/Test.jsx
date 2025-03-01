import React from 'react'
import {motion } from "framer-motion"

const Test = () => {
  const variants  ={
    visible:{opacity:1},
    hidden:{opacity:0}
  }

  return (
    <div className='course'>
        <motion.div className='box' 
          variants={variants}
          initial= "hidden"
          transition={{duration:2}}
          animate="visible"
          
          
        />  
    </div>
    
  )
}

export default Test