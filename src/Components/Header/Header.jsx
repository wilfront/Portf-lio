'use client'

import React from 'react'
import './Header.css'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '@/context/ThemeContext'

export default function Header() {
  const [navMenu, setNavMenu] = React.useState(false);
  const { isDark, toggleTheme, mounted } = useTheme();
  
  const toggleMenu = () => {
    setNavMenu(!navMenu);
  }

  const menuVariants = {
    hidden: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      }
    },
    exit: {
      x: '-100%',
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      }
    }
  }

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      }
    })
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          <div className="logo-image">
            <Image src="/perfil-normal.jpg" width={50} height={50} alt="Wilson Noni" />
          </div>
          <h1>Wilson Noni</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <Link className='nav-link' href='/'>Home</Link>
          <Link className='nav-link' href='/about'>Sobre</Link>
          <Link className='nav-link' href='/projects'>Projetos</Link>
          <a className='nav-link nav-contact' href='https://api.whatsapp.com/send?phone=14991954240&text=Ol%C3%A1,gostaria%20de%20saber%20sobre..' target="_blank" rel="noopener noreferrer">Contato</a>
          {mounted && (
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={toggleMenu} aria-label="Menu">
          {navMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {navMenu && (
          <motion.nav 
            className="nav-mobile"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="mobile-menu-list">
              <motion.li custom={0} variants={linkVariants} initial="hidden" animate="visible">
                <Link className='mobile-nav-link' href='/' onClick={() => setNavMenu(false)}>Home</Link>
              </motion.li>
              <motion.li custom={1} variants={linkVariants} initial="hidden" animate="visible">
                <Link className='mobile-nav-link' href='/about' onClick={() => setNavMenu(false)}>Sobre</Link>
              </motion.li>
              <motion.li custom={2} variants={linkVariants} initial="hidden" animate="visible">
                <Link className='mobile-nav-link' href='/projects' onClick={() => setNavMenu(false)}>Projetos</Link>
              </motion.li>
              <motion.li custom={3} variants={linkVariants} initial="hidden" animate="visible">
                <a className='mobile-nav-link mobile-contact' href='https://api.whatsapp.com/send?phone=14991954240&text=Ol%C3%A1,gostaria%20de%20saber%20sobre..' target="_blank" rel="noopener noreferrer" onClick={() => setNavMenu(false)}>Contato</a>
              </motion.li>
              {mounted && (
                <motion.li custom={4} variants={linkVariants} initial="hidden" animate="visible">
                  <button className="mobile-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                    {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
                    <span>{isDark ? 'Claro' : 'Escuro'}</span>
                  </button>
                </motion.li>
              )}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}