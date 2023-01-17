import React, { Component } from 'react';

import darbyPic1 from '../../assets/images/pictures/darby/darby-1.jpg';
import darbyPic2 from '../../assets/images/pictures/darby/darby-2.jpg';
import darbyPic3 from '../../assets/images/pictures/darby/darby-3.jpg';

import './About.scss';

class About extends Component {

    render() {
        return <>
            <div id="about" className="about">
                <div className="about-text">
                    <h1>About Darby</h1>
                    <p>
                        DARBY HANSON, CMP, RYT.
                        <br /><br />
                        My soul's desire is to give back the transformational experiences that have radically changed my life and my relationship with myself for the better.  Yoga, massage, and energetic healing have been a path to self-discovery, leading me to the truest part of myself.  The threads of these teachings have weaved themselves through the entire fabric of my life, uplifting me spiritually, mending me physically, and transforming me mentally.  I strive to cultivate a space that harvest a unique and authentic personal experience of self.  It is such a gift to hold space for personal alignment like those who have done so for me.
                        <br /><br />
                        Bodywork has been a powerful tool in my life for self love and self healing. Realizing the connection between my physical body and emotional body allowed me to let go of much stored energy that I had been hold on to. As I let go of stored emotion I was finally able to start rehabilitating on a causal level with lasting result by taking more holistic approach. My intention is to provide a tailored, deep and relaxing treatment that focused on deep breathing and stress reduction for every client that comes to see me.
                    </p>
                </div>
                <div className="image-container">
                    <div>
                        <img className="about-pic" alt="about darby" src={darbyPic1} />
                    </div>
                    <div>
                        {/*  style={{ 'margin' : '0 20px' }} */}
                        <img className="about-pic" alt="about darby" src={darbyPic2} />
                    </div>
                    <div>
                        <img className="about-pic" alt="about darby" src={darbyPic3} />
                    </div>
                </div>
            </div>
        </>;
    }
}

export default About;