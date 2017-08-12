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
                <div className="content-group">
                    <h2>Work</h2>
                    <div>
                        <a id="link-4" href="#">Axiom Norway AS, 2014 - 2016</a>
                        <a id="link-5" href="#">University of Oslo, 2016 - present</a>
                    </div>
                </div>
                <div className="content-group">
                    <h2>Technical</h2>
                    <div>
                        <a id="link-6" href="#"></a>
                        <a id="link-7" href="#"></a>
                    </div>
                </div>
                <div className="content-group">
                    <h2>Education</h2>
                    <div>
                        <a id="link-6" href="#">University of Agder (BSc. Information Systems)</a>
                        <a id="link-7" href="#">University of Oslo (MSc. Computer Science)</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;