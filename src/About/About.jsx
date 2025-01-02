import React from 'react'
import './About.css'
import Perfil from '../assets/perfil2.jpeg'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className='about'>
      <motion.div className="text-about"
       initial={{opacity:0, x: -200}}
       whileInView={{opacity:1, x: 0}}
       exit={{opacity:0, x: 200 }}
       transition={{duration:0.5}}
      >
        <h1>Sobre Mim</h1>
        <div className='borda'></div>
        <p>Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais,
          principalmente em termos de programação e tecnologia.</p>
      </motion.div>
      <div className="grid-about">
        <motion.div className="conhecer"
         initial={{opacity:0, x: -200}}
         whileInView={{opacity:1, x: 0}}
         exit={{opacity:0, x: 200 }}
         transition={{duration:0.5}}
        >
          <h1>Venha me conhecer!</h1>
          <p>Sou um Desenvolvedor Web Focado em Frontend, construindo e gerenciando o Front-end de Sites e Aplicativos Web que levam ao sucesso do produto geral. Confira alguns dos meus trabalhos na seção Projetos .

            Também gosto de compartilhar conteúdo relacionado ao que aprendi ao longo dos anos em Desenvolvimento Web para que possa ajudar outras pessoas da Comunidade Dev. Sinta-se à vontade para se conectar ou me seguir no meu Linkedin e Instagram, onde posto conteúdo útil relacionado ao Desenvolvimento Web e Programação

            Estou aberto a oportunidades de trabalho onde eu possa contribuir, aprender e crescer. Se você tiver uma boa oportunidade que corresponda às minhas habilidades e experiência, não hesite em entrar em contato comigo.</p>
        </motion.div>
        <motion.div className="perfil"
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        exit={{opacity:0, x:100}}
        transition={{duration:0.5}}
        >
          <img src={Perfil}  alt="foto-perfil" />
        </motion.div>
        <motion.div className="habilidades"
        initial={{opacity: 0, x:-100}}
        whileInView={{opacity:1, x:0}}
        exit={{opacity:0, x:100}}
        transition={{duration:0.5}}
        >
          <h1>Minhas Habilidades</h1>
          <div className="icones-hab">
            <div className='hab'>html</div>
            <div className='hab'>Css</div>
            <div className='hab'>JavaScript</div>
            <div className='hab'>React</div>
            <div className='hab'>Git</div>
            <div className='hab'>GitHub</div>
            <div className='hab'>Design responsivo</div>
            <div className='hab'>Terminal</div>
            <div className='hab'>Node.Js</div>
          </div>
        </motion.div>
      </div>

    </div>
  )
}

export default About