import React, { Component } from 'react';

import './BlogItem.scss';

class BlogItem extends Component {

    render() {
        return <>
            <div className="blog-item">
                <div className="image">
                    <img src={this.props.imgSrc} alt="item-img" />
                </div>
                <p className="title">{this.props.title}</p>
                <p className="date">{this.props.date}</p>
                <p className="description">{this.props.description}</p>
                <a href={this.props.learnMore} target="_blank" rel="noreferrer">
                    <button>Continue Reading...</button>
                </a>
            </div>
        </>;
    }
}

export default BlogItem;