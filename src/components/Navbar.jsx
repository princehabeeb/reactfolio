import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import MenuIcon from '../assets/menu.png';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible)
  }
  return (
    <nav>
      <h1 className='logo'>Code <span>Alumni</span></h1>
      <img src={MenuIcon} className='menuIcon' onClick={toggleMenu} />
      <ul style={{display: isVisible? 'block' : 'none'}} >
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