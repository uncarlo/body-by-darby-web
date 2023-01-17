import React, {Component} from 'react';

import Header from '../../components/Header/Header';

import './BlogPage.scss';

class BlogPage extends Component {
    render() {
        return <>
            <div className="blog-wrapper">
                <Header showTitle="false" />
            </div>
        </>
    }
}

export default BlogPage;