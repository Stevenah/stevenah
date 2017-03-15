import React, { PropTypes } from 'react'
import logo from 'res/logo.svg';

class Header extends React.Component {
    render () {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Steven's Home</h2>
            </div>
        );
    }
}

export default Header;
