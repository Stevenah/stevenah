import React, { Component } from 'react';
import Header from 'components/app/Header';
import Footer from 'components/app/Footer';
import Sidebar from 'components/layout/Sidebar';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                { this.props.children }
                <Footer />
            </div>
        );
    }
}

export default Layout;