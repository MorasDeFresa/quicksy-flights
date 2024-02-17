import React from 'react'
import NavBar from '../nav-bar/navBar'
import './header.scss'
import '../../globals.scss'

function HeaderUi() {
  return (
    <header className='header'>
      <div className='logo'>
        <img src="/logos/logo.png" alt="Quicksy Flights"/>
      </div>
      <div className='nav-bar__container'>
        <NavBar></NavBar>
      </div>
      <div className='login-buttons'>
        <button className='btn'>REGISTRARSE</button>
        <button className='btn'>INICIAR SESIÓN</button>
      </div>
    </header>
  )
}

export default HeaderUi