import React, { useState } from 'react'
import logo from '../logo.svg'
import { Container } from '@mui/material'

function Header() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
      };


    return (
        <Container maxWidth='lg'>
            <header className="header">

                <nav className='nav'>
                    <div className="logo">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <ul className="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <div className="menu-icon" onClick={toggleMenu}>&#9776;</div>
                </nav>
            </header>

        </Container>
    )
}

export default Header