import React, { PropTypes, Component } from 'react';
import Navigation from 'components/app/Navigation';
import 'style/Header.scss'
import logo from 'res/logo.svg';

class Header extends Component {
    render () {
        return (
            <header className="header-bar">
                <Navigation />
            </header>
        );
    }
}

Header.propTypes = {

}

export default Header;
