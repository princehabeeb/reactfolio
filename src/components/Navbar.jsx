import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <h1 className='logo'>Code <span>Alumni</span></h1>
      <ul>
        <li>
          <Link to='/'>Works</Link>
        </li>
        <li>
          <Link to='/'>Blog</Link>
        </li>
        <li>
          <Link to='/'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar