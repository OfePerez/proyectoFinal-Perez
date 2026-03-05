import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <NavLink to="/">
        <h1 className='siteName'>AO Studio</h1>
      </NavLink>
        
        <nav>
            <ul>
                <li><NavLink to="categoria/baterias">Baterias</NavLink></li>
                <li><NavLink to="categoria/guitarras-bajos">Guitarras y Bajos</NavLink></li>
                <li><NavLink to="categoria/teclados">Teclados</NavLink></li>
                <li><NavLink to="categoria/amplificadores">Amplificadores</NavLink></li>
                <li><NavLink to="categoria/accesorios">Accesorios</NavLink></li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar