import React, { Component } from 'react';

import './ServiceItem.scss';

class ServiceItem extends Component {

    render() {
        return <>
            <div className="service-item">
                <div className="image">
                    <img src={this.props.imgSrc} alt="item-img" />
                </div>
                <div className="item-content">
                    <p className="title">{this.props.title}</p>
                    <p className="pricing">{this.props.pricing}</p>
                    <p className="info">{this.props.additionalInfo}</p>
                    <p className="description">{this.props.description}</p>
                    <a href={this.props.learnMore} >
                        <button>Learn More...</button>
                    </a>
                </div>
            </div>
            <div className='separator'></div>
        </>;
    }
}

export default ServiceItem;