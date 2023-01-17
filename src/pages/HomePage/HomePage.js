import React, { Component } from 'react';

import Services from '../../components/Services/Services';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer';
import Subheader from '../../components/Subheader/Subheader';

import './HomePage.scss';

class HomePage extends Component {
    render() {
        return <>
            <Header />
            <Subheader />
            <Services />
            <About />
            <Testimonials />
            <Footer />
        </>;
    }
}

export default HomePage;