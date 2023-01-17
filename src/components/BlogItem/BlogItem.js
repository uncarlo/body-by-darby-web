import React, { Component } from 'react';

import './BlogItem.scss';

class BlogItem extends Component {

    render() {
        return <>
            <div className="blog-item-wrapper">
                <div className="overlay">
                    <p className="title">{this.props.title}</p>
                    <p className="date">{this.props.date}</p>
                    <p className="description">{this.props.description}</p>
                    <button onClick={this.props.onClick}>Continue Reading...</button>
                </div>
            </div>
        </>;
    }
}

export default BlogItem;