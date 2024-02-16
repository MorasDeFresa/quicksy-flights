import React from 'react'
import NavBar from '../nav-bar/navBar'

function HeaderUi() {
  return (
    <header>
      <div className='logo'>
        <img src="" alt="" />
      </div>
      <div className='nav-bar__container'>
        <NavBar></NavBar>
      </div>
      <div className='login-buttons'>
        <button>REGISTRARSE</button>
        <button>INICIAR SESIÓN</button>
      </div>
    </header>
  )
}

export default HeaderUi