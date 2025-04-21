import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderComponent = () => {
  return (
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark w-100'>
        <div className="container-fluid">
            <a className='navbar-brand' href="www.vasuki.net">Employee Management System</a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className='nav-link' to='/employees'>Employees</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className='nav-link' to='/departments'>Departments</NavLink>
                </li>
              </ul>
            </div>
        </div>
        </nav>
      </header>
  )
}
