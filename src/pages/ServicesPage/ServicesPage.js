import React from 'react';
import { useParams } from 'react-router-dom';

import servicePageData from "../../assets/data/service-pages.json";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

import btnBookNow from '../../assets/images/button-booknow.png';

import './ServicesPage.scss';

function ServicesPage() {
    const { serviceName } = useParams();

    const servicePage = servicePageData.filter(x => x.name === serviceName)[0];
    if (!servicePage) {
        return <h1>Page Not Found.</h1>
    }

    let html = '';
    if (servicePage) {
        html = servicePage.html;
    }
    const displayHtml = DOMPurify.sanitize(html, {
        USE_PROFILES: { html: true }
    });

    return <>
        <div className="services-page-wrapper">
            <h1>{servicePage.title}</h1>
            <div className="image-container">
                <img src={servicePage.headerImage} alt="header" />
            </div>
            <div className="content">
                {parse(displayHtml)}
            </div>
            <div className="separator" />
            <div className="book-now">
                <a href="https://bodybydarby.com/booking" target="_blank" rel="noreferrer">
                    <img src={btnBookNow} alt="book now" />
                </a>
            </div>
        </div>
    </>;
}

export default ServicesPage;