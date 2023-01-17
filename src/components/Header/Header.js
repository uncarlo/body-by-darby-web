import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

import './Header.scss';
import logo from '../../assets/images/logo.png';
import btnBookNow from '../../assets/images/button-booknow.png';
import parallaxImage from '../../assets/images/pictures/header-image-1.jpg';
import Social from '../Social/Social';


class Header extends Component {

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
                        <a href="/">Contact</a>
                        <a href="/">Blog</a>
                    </div>
                </div>
                <div className="title"><h1>{this.title}</h1></div>
            </div>
            <div className='separator'></div>
            
            <Social />

            <div className="biz-info">
                <h1>Holistic Bodywork</h1>
                <h2>Craniosacral Therapy · Yoga · Therapeutic Massage</h2>
                <h3>Serving all of San Diego</h3>

                <a href="https://bodybydarby.com/booking" target="_blank" rel="noreferrer">
                    <img src={btnBookNow} alt="book now" />
                </a>
            </div>
            <ParallaxBanner
                className='parallax-wrapper'
                layers={[
                    {
                        image: parallaxImage,
                        speed: -40
                    }]}>
            </ParallaxBanner>
        </>;
    }
}

export default Header;