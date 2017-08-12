import React, { Component } from 'react';

import 'styles/Terminal.scss';

class Terminal extends Component {
    render() {
        return (
            <div className="terminal">
                <div id="bar">
                    <div id="button-red"></div>
                    <div id="button-yellow"></div>
                    <div id="button-green"></div>
                </div>
                <div id="screen">
                    <p className="command">Cosmin.currentLocation</p>
                    <p className="response">Brasov, Romania</p>

                    <p className="command">Cosmin.contactInfo</p>
                    <p className="response array">
                        <a className="array-element" href="#">myemail@gmail.com</a>,
                        <a className="array-element" href="https://www.linkedin.com/in/cosminanghel" target="_blank">LinkedIn</a>,
                        <a className="array-element" href="https://github.com/CosminZoRR" target="_blank">Github</a>
                    </p>

                    <p className="command">Cosmin.interests</p>
                    <p className="response array">
                        <span className="array-element">Coding</span>,
                        <span className="array-element">Electronics</span>,
                        <span className="array-element">Music</span>,
                        <span className="array-element">Driving</span>,
                        <span className="array-element">Traveling</span>,
                        <span className="array-element">Learning</span>
                    </p>

                    <p className="command">Cosmin.education</p>
                    <p className="response">Computer Science - Transilvania University, Brasov</p>

                    <p className="command">Cosmin.skills</p>
                    <p className="response array">
                        <span className="array-element">Laravel/PHP</span>,
                        <span className="array-element">MySQL</span>,
                        <span className="array-element">HTML/CSS</span>,
                        <span className="array-element">JQuery/Javascript</span>,
                        <span className="array-element">C/C++/C#</span>,
                        <span className="array-element">Java</span>,
                        <span className="array-element">Git</span>
                    </p>
                    
                    <p className="command">
                        <span className="cursor">&nbsp;</span>	
                    </p>
                </div>
             </div>
        );
    }
}

export default Terminal;