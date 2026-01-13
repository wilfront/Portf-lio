'use client'

import React from 'react'
import './Projects.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Projects() {
  return (
    <div className='projects'>
      <motion.div className="text-projects"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Projetos</h1>
        <div className='borda'></div>
        <p>Aqui você encontrará alguns dos meus projetos fullstack pessoais e de clientes.
          Cada projeto foi desenvolvido do zero, integrando Frontend moderno, Backend robusto e serviços cloud.</p>
      </motion.div>
      <div className="grid-project">
        <motion.div className="img-project"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/spotify.png" width={450} height={300} alt="Project-1" />
        </motion.div>
        <motion.div className="about-project"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Spotify Clone</h1>
          <p>Projeto inspirado no Spotify, desenvolvido com frontend em React e uma arquitetura preparada para integrações de backend, com autenticação, persistência de dados e gestão de arquivos de áudio (upload/streaming/organização) por meio de serviços externos.</p>
          <a href='https://github.com/wilfront/spotify' className="btn-project" target="_blank" rel="noopener noreferrer">
            <button>Link do Projeto</button>
          </a>
        </motion.div>
        <motion.div className="img-project"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/foto-site-barbeiro.png" width={450} height={300} alt="Project-1" />
        </motion.div>
        <motion.div className="about-project"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Barbeiro Shop</h1>
          <p>Aplicação para gerenciamento de barbearia com frontend responsivo em React e integrações externas para autenticação, dados e upload de imagens, permitindo manter informações organizadas e um portfólio atualizado dos serviços.</p>
          <a href='https://github.com/wilfront/site-barbeiro' className="btn-project" target="_blank" rel="noopener noreferrer">
            <button>Link do Projeto</button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
