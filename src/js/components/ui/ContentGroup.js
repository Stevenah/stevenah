import React, { Component } from 'react';

class ContentGroup extends Component {
    render() {

        const {title, } = this.props;

        return (
            <div className="content-group">
                <h2>{title}</h2>
                <div>
                    <a id="link-1" className="github" href="https://github.com/Stevenah">github</a>
                    <a id="link-2" className="email" href="#">email</a>
                    <a id="link-3" className="twitter" href="#">twitter</a>
                </div>
            </div>
        );
    }
}

export default ContentGroup;