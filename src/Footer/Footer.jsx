import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <div className='container-footer'>
      <footer>
        <motion.div className="text-footer"
        initial={{opacity:0, x:-200}}
        whileInView={{opacity:1, x:0}}
        exit={{opacity:0, x:200}}
        transition={{duration:0.5}}
        >
          <h1>Wilson Noni</h1>
          <p>Um desenvolvedor web focado em Frontend construindo o Frontend de sites
            e Aplicações Web que levam ao sucesso do  produto </p>
        </motion.div>
        <motion.div className="social"
        initial={{opacity:0, x:50}}
        whileInView={{opacity:1, x:0}}
        exit={{opacity:0, x:-50}}
        transition={{duration:0.5}}
        >
          <h1>Rede Social</h1>
          <div className="rede">
            <NavLink className="instagram" to='https://www.instagram.com/wilfrontoficial/?next=%2F'><FaInstagram /></NavLink>
            <div className='linkedin'><FaLinkedinIn /></div>
            <NavLink className='github'to='https://github.com/wilfront'><FaGithub /></NavLink>
          </div>
        </motion.div>
      </footer>
      <div className='borda-footer'></div>
      <motion.div className='copy'
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      exit={{opacity:0, y:-20}}
      transition={{duration:0.5}}
      >
        <h6>© Copyright 2024 . Made by wilfront</h6>
      </motion.div>
    </div>
  )
}

export default Footer