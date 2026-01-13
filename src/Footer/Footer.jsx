'use client'

import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
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
          <p>Desenvolvedor Fullstack criando soluções web completas com Frontend moderno,
            Backend robusto e integrações cloud. Do conceito ao deploy.</p>
        </motion.div>
        <motion.div className="social"
        initial={{opacity:0, x:50}}
        whileInView={{opacity:1, x:0}}
        exit={{opacity:0, x:-50}}
        transition={{duration:0.5}}
        >
          <h1>Rede Social</h1>
          <div className="rede">
            <a href='https://www.instagram.com/wilfrontoficial/?next=%2F' className="instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <div className='linkedin'><FaLinkedinIn /></div>
            <a href='https://github.com/wilfront' className='github' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
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
        <h6>© Copyright 2025 . Made by wilfront</h6>
      </motion.div>
    </div>
  )
}
