import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar () {
  return (
    <div>
      <nav className='navbar navbar-dark  navbar-expand-lg'>
        <Link to='/' className='navbar-brand'><img src={logo} alt='logo' /></Link>
        <div className='collpase navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='navbar-item'>
              <Link to='/exerciselist' className='nav-link'>Exercises</Link>
            </li>
            <li className='navbar-item'>
              <Link to='/create' className='nav-link'>Create Exercise</Link>
            </li>
            <li className='navbar-item'>
              <Link to='/user' className='nav-link'>Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
