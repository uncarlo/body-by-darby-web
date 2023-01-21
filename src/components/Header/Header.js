import React, { useState } from 'react';

import { FaBars } from "react-icons/fa";

import logo from '../../assets/images/logo.png';
import btnBookNow from '../../assets/images/button-booknow.png';

import './Header.scss';

function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setMenuOpen(prev => !prev)
        
    };

    const title = "Body By Darby"

    return <>
        <div id="welcome" className="header-wrapper">
            <div className={`resp-menu-panel ${menuOpen ? "show-menu" : ""}`}>
                <div className="separator" />
                <ul>
                    <li><a href='/#welcome'>Welcome</a></li>
                    <li><a href='/#services'>Services</a></li>
                    <li><a href='/#about'>About</a></li>
                    <li><a href="/#testimonials">Testimonials</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
                <div className="separator" />
                <a className="booking" href="/booking" target="_blank" rel="noreferrer">
                    <img src={btnBookNow} alt="book now" />
                </a>
            </div>
            <div className="menu">
                <div className="menu-left">
                    <a href='/#welcome'>Welcome</a>
                    <a href='/#services'>Services</a>
                    <a href='/#about'>About</a>
                </div>
                <div className='logo'>
                    <img alt="logo" src={logo} />
                </div>
                <div className="menu-right">
                    <a href="/#testimonials">Testimonials</a>
                    <a href="/contact">Contact</a>
                    <a href="/blog">Blog</a>
                </div>
            </div>

            <div className="resp-menu">
                <button onClick={handleToggleMenu}>
                    <FaBars />
                </button>
            </div>

            <div className="resp-logo">
                <img alt="logo" src={logo} />
            </div>
            
            <div className="title"><h1>{title}</h1></div>
            
        </div>
    </>;
}

export default Header;