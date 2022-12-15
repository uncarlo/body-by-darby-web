import React, { Component } from 'react';

import './Header.scss';
import logo from '../../assets/images/logo.png';

class Header extends Component {
    title = "Body By Darby"

    render() {
        return <>
            <div className="header-wrapper">
                <div className="menu">
                    <div className="menu-left">
                        <a>Welcome</a>
                        <a>Services</a>
                        <a>About Darby</a>
                    </div>
                    <div className='logo'>
                        <img src={logo} />
                    </div>
                    <div className="menu-right">
                        <a>Testimonials</a>
                        <a>Contact</a>
                        <a>Blog</a>
                    </div>
                </div>
                <div className="title"><h1>{this.title}</h1></div>
            </div>
            <div className='separator'></div>
            <div className="social-media-wrapper">

            </div>
        </>;
    }
}

export default Header;