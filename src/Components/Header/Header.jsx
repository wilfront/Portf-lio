import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import fotoLogo from '../../assets/perfil2.jpeg'

function Header() {
  const [navMenu,setNavMenu]= useState(false);
  const Toogle=()=>{
    setNavMenu(!navMenu);
    console.log(navMenu)
  }
  const ToogleNav=()=>{
    setNavMenu(!navMenu);
  }

  return (
    <header>
      <div className="logo">
        <img src={fotoLogo} width="60px" alt="foto-logo" />
        <h1>Wilson Noni</h1>
        </div>
      <div className={navMenu ? "active" : "inative"} onClick={Toogle}>
        <button className='hamburguer'></button>
      </div>
      <nav className={navMenu ? "NavActive" : "NavInative"} onClick={ToogleNav}>
        <ul className='menu-list'>
          <li className='menu'>
            <NavLink className='nav' to='/'>Home</NavLink>
            <NavLink className='nav' to='/About'>Sobre</NavLink>
            <NavLink className='nav' to='/Projects'>Projetos</NavLink>
            <NavLink className='nav' to='https://api.whatsapp.com/send?phone=14991954240&text=Ol%C3%A1,gostaria%20de%20saber%20sobre..'>Contato</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header