import React, { Component } from 'react';

class LayerLayout extends Component {
    render() {

        const { width, height } = this.props;

        return (
            <div>
                <Sidebar />
                {this.props.children}
            </div>
        );
    }
}

export default LayerLayout;