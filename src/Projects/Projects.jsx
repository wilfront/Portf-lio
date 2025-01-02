import React from 'react'
import './Projects.css'
import Project1 from '../assets/projeto-barbeiro.png'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <div className='projects'>
      <motion.div className="text-projects"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        exit={{opacity:0, y:-100}}
        transition={{duration:0.5}}
      >
        <h1>Projetos</h1>
        <div className='borda'></div>
        <p>Aqui você encontrará alguns dos projetos pessoais e de clientes que criei,
          cada projeto contendo seu próprio estudo de caso</p>
      </motion.div>
      <div className="grid-project">
        <motion.div className="img-project"
        initial={{opacity:0, x:-200}}
        whileInView={{opacity:1, x:0}}
        exit={{opacity:0, x:200}}
        transition={{duration:0.5}}
        >
          <img src={Project1} width="450px" alt="Project-1" />
        </motion.div>
        <motion.div className="about-project"
        initial={{opacity:0, x:50}}
        whileInView={{opacity:1, x:0}}
        exit={{opacity:0, x:-50}}
        transition={{duration:0.5}}
        >
          <h1>Barbeiro Shop</h1>
          <p>Barbeiro Shop é um modelo web que eu mesmo criei voltado para o setor de barbearia.
            Foi uma ótima experiência para mim construir o frontend inteiro.</p>
            <NavLink className="btn-project" to='https://github.com/wilfront/site-barbeiro'>
              <button>Link do Projeto</button>
            </NavLink>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects