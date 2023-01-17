import React, { Component } from 'react';
import NavigateComponent from '../Navigation/NavigateComponent';

import './BlogItem.scss';

class BlogItem extends Component {

    render() {
        return <>
            <div className="blog-item-wrapper">
                <div className="overlay">
                    <p className="title">{this.props.title}</p>
                    <p className="date">{this.props.date}</p>
                    <p className="description">{this.props.description}</p>
                    <NavigateComponent
                        title="Continue Reading..."
                        onclick={this.props.onclick}>
                    </NavigateComponent>
                </div>
            </div>
        </>;
    }
}

export default BlogItem;