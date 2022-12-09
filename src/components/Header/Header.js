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
                        <ul>
                            <li><a>Welcome</a></li>
                            <li><a>Services</a></li>
                            <li><a>About Darby</a></li>
                        </ul>
                    </div>
                    <div className='logo'>
                        <img src={logo} />
                    </div>
                    <div className="menu-right">
                        <ul>
                            <li><a>Testimonials</a></li>
                            <li><a>Contact</a></li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                </div>
                <div className="title"><h1>{this.title}</h1></div>
            </div>
        </>;
    }
}

export default Header;