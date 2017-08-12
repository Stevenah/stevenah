import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return (
            <div className="resume">
                <div className="content-group">
                    <h2>Steven Hicks</h2>
                    <div>
                        <a id="link-1" className="github" href="https://github.com/Stevenah">github</a>
                        <a id="link-2" className="email" href="mailto:steven@dhis2.org">email</a>
                        <a id="link-3" className="twitter" href="https://twitter.com/DeFactoSteven">twitter</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;