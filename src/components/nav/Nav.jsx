import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav-container'>
      <ul className='nav-itemList'>
        <Link to='/' className="link">
          <li className='nav-item'>Workovers</li>
        </Link>
        <li className='nav-lb'></li>
        <li className='nav-item'>Drilling</li>
        <li className='nav-lb'></li>
        <li className='nav-item'>PSF</li>
      </ul>
    </div>
  )
}

export default Nav