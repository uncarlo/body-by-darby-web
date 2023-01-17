import React, { Component } from 'react';

import darbyPic2 from '../../assets/images/pictures/darby/darby-2.jpg';

import BlogItem from '../../components/BlogItem/BlogItem';

import './BlogPage.scss';

class BlogPage extends Component {
    
    navigateToBlogArticle() {
        console.log('handle click on blogpage')
    }

    render() {
        return <>
            <div className="blog-wrapper">
                <div className="blog">
                    <div className="blog-item">
                        <BlogItem
                            imgSrc={darbyPic2}
                            title="Meet Darby"
                            date="November 15, 2022"
                            description="Hi, I’m Darby Dooda Hanson. I’m a Certified Massage Practitioner, Cranial Sacral Therapist..."
                            learnMore="/blog/meet-darby"
                            onclick={this.navigateToBlogArticle} />
                    </div>
                </div>
            </div>
        </>
    }
}

export default BlogPage;