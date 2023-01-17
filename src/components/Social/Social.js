import React, { Component } from 'react';
import { FaFacebookF, FaInstagram, FaYelp, FaYoutube } from "react-icons/fa";

import gLogo from '../../assets/images/google-review/glogo.png';
import gStars from '../../assets/images/google-review/gstars.png';

import './Social.scss';

class Social extends Component {
    render() {
        return <>
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
        </>
    }
}

export default Social;