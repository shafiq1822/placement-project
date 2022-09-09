import React from 'react'
import './loginNavbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='login-nav'>
      <a href="/"><h2>Crud App</h2></a>
      <ul>
        <NavLink to='/loginPage'><li className='login'>Login</li></NavLink>
        <NavLink to='/registrationPage'><li className='register'>Register</li></NavLink>
      </ul>
    </nav>
  )
}

export default Navbar;