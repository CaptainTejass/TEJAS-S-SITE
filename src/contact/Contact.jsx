import React, { useRef } from 'react'
import "./Contact.scss"
import { motion,useInView } from 'framer-motion'
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const variants={
        initial:{
            y:500,
            opacity:0,
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:0.5,
                staggerChilder:0.1,
            }
        }
}

const Contact = () => {
    
    const formRef = useRef();
    const ref = useRef();
    const isinView = useInView(ref,{margin:"-100px"});
    const [error,setError] = useState(false);
    const [success,setSuccess] = useState(false);
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_63y8cbl', 'template_xycun7i', formRef.current, {
            publicKey: 'cAxKpm_Gq2RMgVsmr',
          })
          .then(
            () => {
              setSuccess(true)
            },
            (error) => {
              setError(true)

            },
          );
      };   
    

  return (
    <motion.div className='container' ref={ref} variants={variants} initial="initial" whileInView="animate">
       <motion.div className='textContainer' variants={variants}>
          <motion.h1 variants={variants}>LET'S WORK TOGETHER</motion.h1>
          <motion.div variants={variants}>
             <h2 className='mail'>mail</h2>
             <span>tejasnim000@gmail.com</span>
          </motion.div>
          <motion.div variants={variants}>
             <h2 className='address'>address</h2>
             <span>Karol Bagh,New Delhi</span>
          </motion.div>
          <motion.div variants={variants}>
             <h2 className='phone'>phone</h2>
             <span>91+ 9871758806</span>
          </motion.div>
       </motion.div>
       <div className='formContainer'>
           <motion.div className='phoneSvg' initial={{opacity:1}} whileInView={{opacity:0,zIndex:-1}} transition={{delay:1,duration:1}}>
              <svg width="450px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#e9dddd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone-call"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><motion.path initial={{pathLength:0}} animate={isinView && {pathLength:1}} transition={{duration:3}} d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></motion.path></g></svg>
           </motion.div>
           <motion.form ref={formRef} onSubmit={sendEmail} className='form' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:2,duration:2}}>
              <input type='text' required placeholder='Name' name='name' />
              <input type='email' required placeholder='Email' name='email' />
              <textarea rows={8} placeholder='Message' name='message'/>
              <button type='submit' value='send'>SUBMIT</button>
              {error && "Error"}
              {success && "Success"}
           </motion.form>
       </div>
    </motion.div>

    
  )
}

export default Contact
/*
const formRef = useRef();
    const ref = useRef();
    const isinView = useInView(ref,{margin:"-100px"});
    const [error,setError] = useState(false);
    const [success,setSuccess] = useState(false);
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_63y8cbl', 'template_1xt5vrr', formRef.current, {
            publicKey: 'cAxKpm_Gq2RMgVsmr',
          })
          .then(
            () => {
              setSuccess(true)
            },
            (error) => {
              setError(true)

            },
          );
      };   
    

  return (
    <motion.div className='container' ref={ref} variants={variants} initial="initial" whileInView="animate">
       <motion.div className='textContainer' variants={variants}>
          <motion.h1 variants={variants}>LET'S WORK TOGETHER</motion.h1>
          <motion.div variants={variants}>
             <h2 className='mail'>mail</h2>
             <span>tejasnim000@gmail.com</span>
          </motion.div>
          <motion.div variants={variants}>
             <h2 className='address'>address</h2>
             <span>Karol Bagh,New Delhi</span>
          </motion.div>
          <motion.div variants={variants}>
             <h2 className='phone'>phone</h2>
             <span>91+ 9871758806</span>
          </motion.div>
       </motion.div>
       <div className='formContainer'>
           <motion.div className='phoneSvg' initial={{opacity:1}} whileInView={{opacity:0,zIndex:-1}} transition={{delay:1,duration:1}}>
              <svg width="450px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#e9dddd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-call"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><motion.path initial={{pathLength:0}} animate={isinView && {pathLength:1}} transition={{duration:3}} d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></motion.path></g></svg>
           </motion.div>
           <motion.form ref={formRef} onSubmit={sendEmail} className='form' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:2,duration:2}}>
              <input type='text' required placeholder='Name' name='name' />
              <input type='email' required placeholder='Email' name='email' />
              <textarea rows={8} placeholder='Message' name='message'/>
              <button type='submit' value='send'>SUBMIT</button>
              {error && "Error"}
              {success && "Success"}
           </motion.form>
       </div>
    </motion.div>

    
  )*/