import React, { Component } from 'react';

import './BlogItem.scss';

class BlogItem extends Component {

    render() {
        return <>
            <a href={this.props.link}>
                <div className="blog-item-wrapper">
                    <img src={this.props.imgSrc} alt="blog" />
                    <div className="overlay">
                        <p className="title">{this.props.title}</p>
                        <p className="date">{this.props.date}</p>
                        <p className="description">{this.props.description}</p>
                        <button>
                            Continue Reading...
                        </button>
                    </div>
                </div>
            </a>
        </>;
    }
}

export default BlogItem;