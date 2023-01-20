import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';

import btnBookNow from '../../assets/images/button-booknow.png';
import parallaxImage from '../../assets/images/pictures/header-image-1.jpg';
import Social from '../Social/Social';

import './Subheader.scss';

class Subheader extends Component {

    title = "Body By Darby"

    render() {
        return <>
            <div className="subheader-wrapper">
                <div className="separator"></div>

                <Social />

                <div className="biz-info">
                    <h1>Holistic Bodywork</h1>
                    <h2>Craniosacral Therapy · Yoga · Therapeutic Massage</h2>
                    <h3>Serving all of San Diego</h3>

                    <a href="/booking" target="_blank" rel="noreferrer">
                        <img src={btnBookNow} alt="book now" />
                    </a>
                </div>
                <ParallaxProvider>
                    <ParallaxBanner
                        className='parallax-wrapper'
                        layers={[
                            {
                                image: parallaxImage,
                                speed: -40
                            }]}>
                    </ParallaxBanner>
                </ParallaxProvider>
            </div>
        </>
    }
}

export default Subheader;