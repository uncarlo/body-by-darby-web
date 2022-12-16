import React, { Component } from 'react';
import { FaFacebookF, FaInstagram, FaYelp, FaYoutube } from "react-icons/fa";
import { ParallaxBanner } from 'react-scroll-parallax';

import './Header.scss';
import logo from '../../assets/images/logo.png';
import gLogo from '../../assets/images/google-review/glogo.png';
import gStars from '../../assets/images/google-review/gstars.png';
import btnBookNow from '../../assets/images/button-booknow.png';
import parallaxImage from '../../assets/images/pictures/header-image-1.jpg';


class Header extends Component {

    title = "Body By Darby"

    render() {
        return <>
            <div className="header-wrapper">
                <div className="menu">
                    <div className="menu-left">
                        <a href="/">Welcome</a>
                        <a href="/">Services</a>
                        <a href="/">About Darby</a>
                    </div>
                    <div className='logo'>
                        <img alt="logo" src={logo} />
                    </div>
                    <div className="menu-right">
                        <a href="/">Testimonials</a>
                        <a href="/">Contact</a>
                        <a href="/">Blog</a>
                    </div>
                </div>
                <div className="title"><h1>{this.title}</h1></div>
            </div>
            <div className='separator'></div>
            <div className="social-media-wrapper">
                <div className="social-media-links">
                    <a href="https://www.facebook.com/Bodybydarbyhanson/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/bodybydarby/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    <a href="https://www.youtube.com/channel/UCfYkxSqNMipdHeDhhnEMfwg" target="_blank" rel="noreferrer"><FaYoutube /></a>
                    <a href="https://www.yelp.com/biz/body-by-darby-solana-beach" target="_blank" rel="noreferrer"><FaYelp /></a>
                </div>
                <a href='https://g.page/r/CXNnF0OnLqwwEBM/review' target="_blank" rel="noreferrer">
                    <div className="google-review">
                        Review us on
                        <img className="google-logo" alt="google logo" src={gLogo} />
                        <img className="google-stars" alt="review stars" src={gStars} />
                    </div>
                </a>
            </div>
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