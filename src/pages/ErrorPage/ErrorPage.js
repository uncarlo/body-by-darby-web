import React, { Component } from 'react';

import './ErrorPage.scss';

class BlogPage extends Component {

    render() {
        return <>
            <div className="error-page-wrapper">
                <p>
                    We couldn't find the page you were looking for. This is either because:
                    <ul>
                        <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>

                        <li>The page you are looking for has been moved or deleted.</li>
                    </ul>
                    You can return to our homepage by clicking here, or you can try searching for the content you are seeking by clicking here.
                </p>
            </div>
        </>
    }
}

export default BlogPage;