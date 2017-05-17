import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "style/Sidebar.scss";

class Sidebar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="">Resume</Link></li>
                    <li><Link to="">Contact</Link></li>
                </ul>
                <span>Github || Twitter || Facebook</span> 
            </div>
        );
    }
}

export default Sidebar;