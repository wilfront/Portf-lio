import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

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
      <div className="logo"><h1>Wilson Noni</h1></div>
      <div className={navMenu ? "active" : "inative"} onClick={Toogle}>
        <button className='hamburguer'></button>
      </div>
      <nav className={navMenu ? "NavActive" : "NavInative"} onClick={ToogleNav}>
        <ul className='menu-list'>
          <li className='menu'>
            <NavLink className='nav' to='/'>Home</NavLink>
            <NavLink className='nav' to='/About'>Sobre</NavLink>
            <NavLink className='nav' to='/Projects'>Projetos</NavLink>
            <NavLink className='nav' to='/Contact'>Contato</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header