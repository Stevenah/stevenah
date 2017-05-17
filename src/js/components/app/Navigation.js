import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'style/Navigation.scss'

class Navigation extends Component {
    render() {
        return (
            <nav className="nav">
                <Link className="nav-link" to="/home">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/blog">Blog</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
            </nav>
        );
    }
}

export default Navigation;