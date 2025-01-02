import React from 'react'
import { NavLink } from 'react-router-dom'

function Contact() {
  return (
    <NavLink className='contato' to='https://api.whatsapp.com/send?phone=14991954240&text=Ol%C3%A1,gostaria%20de%20saber%20sobre..'></NavLink>
  )
}

export default Contact