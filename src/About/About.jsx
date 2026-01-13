'use client'

import React from 'react'
import './About.css'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="about">

      {/* TEXTO TOPO */}
      <motion.div className="text-about"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Sobre Mim</h1>
        <div className="borda"></div>
        <p>
          Aqui você encontrará mais informações sobre mim,
          o que faço e minhas habilidades atuais.
        </p>
      </motion.div>

      {/* GRID PRINCIPAL */}
      <div className="grid-about">

        {/* TEXTO ESQUERDA */}
        <motion.div className="conhecer"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Venha me conhecer!</h1>
          <p>
            Sou um Desenvolvedor Fullstack apaixonado por criar
            soluções web modernas, performáticas e escaláveis.
            Trabalho com tecnologias atuais focadas em qualidade
            e experiência do usuário.
          </p>
        </motion.div>

        {/* FOTO CENTRAL COM EFEITO */}
        <motion.div
          className="compare-container"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const x = ((e.clientX - rect.left) / rect.width) * 100
            e.currentTarget.querySelector('.img-overlay').style.clipPath =
              `inset(0 ${100 - x}% 0 0)`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.querySelector('.img-overlay').style.clipPath =
              'inset(0 50% 0 0)'
          }}
        >
          <img src="/perfil-normal.jpg" className="img-base" alt="normal" />
          <img src="/perfil-tech.jpg" className="img-overlay" alt="tech" />
        </motion.div>

        {/* HABILIDADES */}
        <motion.div className="habilidades"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Minhas Habilidades</h1>
          <div className="icones-hab">
            <div className="hab">HTML</div>
            <div className="hab">CSS</div>
            <div className="hab">JavaScript</div>
            <div className="hab">React</div>
            <div className="hab">Next.js</div>
            <div className="hab">Node.js</div>
            <div className="hab">Express</div>
            <div className="hab">Firebase</div>
            <div className="hab">Git & GitHub</div>
            <div className="hab">APIs REST</div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
