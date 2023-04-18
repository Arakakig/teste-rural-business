import React from 'react'
import logo from '../assets/logo.png'
import './header.css'
function Header() {
    return (
        <nav className='d-flex ml-5 header-container'>
            <div><img src={logo} /></div>
        </nav>
    )
}

export default Header