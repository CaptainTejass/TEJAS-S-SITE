import React from 'react'
import { motion } from 'framer-motion'

const variants={
  open:{
    transition:{
      straggerChildren:0.1
    },
  },
  closed:{
    transition:{
      straggerChildren:0.05,
      straggerDirection:-1, 
      duration:1,
    }
  }
}
const itemVariants={
  open:{
    y:0, 
    opacity:1,
  },
  closed:{
    y:50,
    opacity:0,
  }
}
const links = () => {
    const items =[
        "homepage",
        "services",
        "portfolio",
        "contact",
        "about",
    ]
    
  return (
    <motion.div className='links'>{items.map(item=>(
      <motion.a href={`#${item}`} key={item} variants={itemVariants} whileTap={{scale:0.8}} whileHover={{scale:1.2}}>{item}</motion.a>
    ))}</motion.div>
  )
}

export default links