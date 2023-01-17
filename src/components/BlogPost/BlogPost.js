import React, { Component } from 'react';

import './BlogPost.scss';

class BlogPost extends Component {

    render() {
        return <>
            <div className="blog-item-wrapper">
                {/* <div className="image">
                    <img src={this.props.imgSrc} alt="item-img" />
                </div> */} */
                <p className="title">{this.props.title}</p>
                <p className="date">{this.props.date}</p>
                <p className="description">{this.props.description}</p>
            </div>
        </>;
    }
}

export default BlogPost;