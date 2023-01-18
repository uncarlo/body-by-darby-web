import React, { Component } from 'react';

import btnBookNow from '../../assets/images/button-booknow.png';
import ContactForm from '../../components/ContactForm/ContactForm';

import './ContactPage.scss';

class ContactPage extends Component {

    navigateToBlogArticle() {
        console.log('handle click on blogpage')
    }

    render() {
        return <>
            <div className="contanct-wrapper">
                <div className="contact-info">
                    <h1>Contact</h1>
                    <p>
                        To book a session, plase call or text Darby at
                        760-702-2588
                        or click the button below.
                    </p>
                    <a href="https://bodybydarby.com/booking" target="_blank" rel="noreferrer">
                        <img src={btnBookNow} alt="book now" />
                    </a>
                    <h2>
                        Location
                    </h2>
                    <p>
                        731 S Hwy 101 Solana Beach, CA 92075
                    </p>
                    <div>
                        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.848834961188!2d-117.27262478464095!3d32.9813897809109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0ed57fcce46b%3A0xbb2fcc139ee1b931!2s731%20Hwy%20101%2C%20Solana%20Beach%2C%20CA%2092075!5e0!3m2!1sen!2sus!4v1674000532211!5m2!1sen!2sus" allowFullScreen="" loading="lazy" title="BodyByDarby" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="contact-form">
                    <ContactForm text="For other inquiries please fill out this form." />
                </div>
            </div>
        </>
    }
}

export default ContactPage;