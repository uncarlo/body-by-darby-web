import React, { Component } from 'react';

import Services from '../../components/Services/Services';
import About from '../../components/About/About';
import Testimonials from '../../components/Testimonials/Testimonials';
import Subheader from '../../components/Subheader/Subheader';

import './HomePage.scss';

class HomePage extends Component {
    render() {
        return <>
            <Subheader />
            <Services />
            <About />
            <Testimonials />
        </>;
    }
}

export default HomePage;