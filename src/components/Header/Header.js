import React, { Component } from 'react';

import './Header.scss';
import logo from '../../assets/images/logo.png';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isTitleVisible: true
        };
    }

    title = "Body By Darby"

    render() {
        return <>
            <div id="welcome" className="header-wrapper">
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

                {this.state.isTitleVisible ?
                    <div className="title"><h1>{this.title}</h1></div>
                    :
                    <></>
                }
            </div>
        </>;
    }
}

export default Header;