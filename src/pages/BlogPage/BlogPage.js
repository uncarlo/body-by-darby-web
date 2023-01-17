import React, { Component } from 'react';
import BlogItem from '../../components/BlogItem/BlogItem';

import darbyPic2 from '../../assets/images/pictures/darby/darby-2.jpg';

import Header from '../../components/Header/Header';

import './BlogPage.scss';

class BlogPage extends Component {
    render() {
        return <>
            <Header showTitle="false" />
            <div className="blog-wrapper">
                <BlogItem
                    imgSrc={darbyPic2}
                    title="Meet Darby"
                    date="November 15, 2022"
                    description="Hi, I’m Darby Dooda Hanson. I’m a Certified Massage Practitioner, Cranial Sacral Therapist, and Yoga Instructor practicing in North County San Diego…"
                    learnMore="/blog/meet-darby" />
            </div>
        </>
    }
}

export default BlogPage;