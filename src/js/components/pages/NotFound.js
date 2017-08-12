import React, { Component } from 'react';

import Terminal from 'ui/Terminal';

import 'styles/NotFound.scss';

class NotFound extends Component {
    render() {
        return (
            <div className="page-not-found">
                <Terminal />
            </div>
        );
    }
}

export default NotFound;