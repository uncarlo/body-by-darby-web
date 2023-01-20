import React, { Component } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem'

import cranioSacral from '../../assets/images/pictures/services/craniosacral-therapy.jpg';
import signatureMassage from '../../assets/images/pictures/services/signature-massage.jpg';
import yogaSession from '../../assets/images/pictures/services/yoga-session.jpg';
import assistedStretch from '../../assets/images/pictures/services/assisted-stretch.jpg';
import guidedBreathwork from '../../assets/images/pictures/services/guided-breathwork.jpg';
import chakraBalancing from '../../assets/images/pictures/services/chakra-balancing.jpg';
import guidedMeditation from '../../assets/images/pictures/services/guided-meditation.jpg';
import btnBookNow from '../../assets/images/button-booknow.png';

import './Services.scss';

class Services extends Component {

    render() {
        return <>
            <div id="services" className="services">
                <div className="header">
                    <h1>
                        Services
                    </h1>
                    <p>
                        Darby Hanson is a holistic practitioner specializing in <strong>Craniosacral Therapy, Energy Work, Therapeutic Massage, and Yoga.</strong> She strives to cultivate a space that harvests a unique and authentic personal experience of self and holds space for personal alignment, transformation, and rejuvenation.
                    </p>
                </div>
                <div className="content">
                    <ServiceItem
                        imgSrc={cranioSacral}
                        title="Cranial Sacral Therapy | SomatoEmotionalRelease"
                        pricing="90 Minutes $150"
                        additionalInfo="SomatoEmotional Release | Virtual Option"
                        description="Cranial Sacral Therapy is a light touch modality that taps into the subtle flexion and extension of the skeletal system, cerebral spinal fluid movement, and the nervous system. The practitioner supports the body's self-healing regulatory system with a sophisticated hands-on method to restore homeostasis to the whole being."
                        learnMore="/services/cranial-sacral-therapy" />
                    <ServiceItem
                        imgSrc={signatureMassage}
                        title="Signature Massage"
                        pricing="90 Minutes $150"
                        additionalInfo=""
                        description="Beautiful blend of energy healing, therapeutic massage, cranial sacral therapy technique. Get ready to be blissed out with this a total energetic, emotional, mental and physical clearing. Plan for a restful night of integration after this totally transcendent liberation."
                        learnMore="/services/signature-massage" />
                    <ServiceItem
                        imgSrc={yogaSession}
                        title="Yoga Session"
                        pricing="75 Minutes $120 | Virtual Option | Packages Available"
                        additionalInfo=""
                        description="Gentle trauma-conscious yoga calms the autonomic nervous system and gently releases emotional and physical trauma trapped in the body. Through powerful asana, pranayama, and meditation my yoga teaching style brings a distinct sense of self-empowerment and peace of mind."
                        learnMore="/services/yoga-session" />
                    <ServiceItem
                        imgSrc={assistedStretch}
                        title="Assisted Deep Stretch"
                        pricing="30 Minutes $60"
                        additionalInfo=""
                        description=" Gentle yet deep assisted stretching will help to reduce the risk of injuries, regain mobility, improve flexibility, improve range of motion."
                        learnMore="/services/assisted-deep-stretch" />
                    <ServiceItem
                        imgSrc={guidedBreathwork}
                        title="Guided Breathwork Session"
                        pricing="60 Minutes $120 | Virtual Option"
                        additionalInfo=""
                        description="Blend of healing breath techniques tailored to the clients specific needs. Reverse chest breathing, process emotional blockages, reduce anxiety and stress, and increase wellbeing and joy."
                        learnMore="/services/guided-breathwork-session" />
                    <ServiceItem
                        imgSrc={chakraBalancing}
                        title="Chakra Balancing / Energy Healing"
                        pricing="60 Minutes $120 | Virtual Option"
                        additionalInfo=""
                        description="Powerful, non-invasive treatment to align and balance the chakra system. Energy work encompasses a wide range of techniques and practices. It is rooted in the principle that body is bioenergetic and seeks to maintain balance. Energy healing, or energy work, seeks to restore, promote, and maintain health and wellness to all those elements by influencing and supporting the body’s bioenergies."
                        learnMore="/services/chakra-balancing-energy-healing" />
                    <ServiceItem
                        imgSrc={guidedMeditation}
                        title="Guided Meditation"
                        pricing="60 Minutes $120 | 120 Minutes $150"
                        additionalInfo="Connect deeply to the peace of who you are. Clear, easy and practical application of meditation that can be implemented into everyday life."
                        description=""
                        learnMore="/services/guided-meditation" />
                </div>
                <div className="booking">
                    <h2>Book Your Session</h2>
                    <a href="https://bodybydarby.com/booking" target="_blank" rel="noreferrer">
                        <img src={btnBookNow} alt="book now" />
                    </a>
                    <p>
                        Call or Text to set up  a 15-minute consultation and book your first session.
                        <br /><br />
                        Fill out your intake form at the button below.
                        <br /><br />
                        By Appointment Only
                        <br /><br />
                        Our office is located in Solana Beach, CA
                        <br /><br />
                        760-702-2588
                    </p>
                </div>
            </div>
        </>;
    }
}

export default Services;