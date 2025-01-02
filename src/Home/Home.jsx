import React from 'react'
import './Home.css'
import About from '../About/About'
import { NavLink } from 'react-router-dom'
import Projects from '../Projects/Projects'
import { motion } from 'framer-motion'

function Home() {


  return (
    <div className='container'>
      <div className='home'>
        <motion.div className="text-home"
         initial={{opacity:0, y:-100}}
         whileInView={{opacity:1, y:0}}
         exit={{opacity:0, y:100}}
         transition={{duration:0.5}}
        >

          <h1>Olá, eu sou</h1>
          <span>Wilson Noni</span>
          <p className='typing'>Desenvolvedor Front end</p>
          <NavLink className="btn" to='/Projects'>
            <button>Projetos</button>
          </NavLink>
        </motion.div>
      </div>
      <About />
      <Projects/>
    </div>
  )
}

export default Home
