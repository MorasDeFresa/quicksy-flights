import React from 'react'
import '../../globals.scss'

function NavBarUi() {
  return (
    <nav className='nav-bar'>
      <ul>
        <li>
          <a>Inicio</a>
        </li>
        <li>
          <a>Comprar Boletos</a>
        </li>
        <li>
          <a>Mis Boletos</a>
        </li>
        <li>
          <a>Contacto</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBarUi