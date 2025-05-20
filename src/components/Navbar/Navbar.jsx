import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import search from '../../assets/search-b.png'
import Kindredlogo from '../../assets/Kindred-logo.png'

const Navbar = () => {
  return (
    <div className='navbar '>
        <img src="src/assets/kindred-blue-logo.png" alt="logo" className='navbar-logo'/>
        <ul>
            <a href="/"><li>Home</li></a>
            <a href="#Foodcard"><li>Recipes</li></a>
            <a href="#About_us"><li>About us</li></a>
        </ul>

        <div className='search-box'>
            <input type="text" placeholder='Search' />
            <img src="src/assets/search-b.png" alt="search"/>
        </div>
        
    </div>
  )
}

export default Navbar
