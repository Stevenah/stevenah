import React, { Component } from 'react';

import Terminal from 'ui/Terminal';
import Resume from 'ui/Resume';

import 'styles/Home.scss'

class Home extends Component {
    render() {
        return (
            <div className="page-home">
                <Resume />
            </div>
        );
    }
}

export default Home;