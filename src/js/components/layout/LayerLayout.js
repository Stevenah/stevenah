import React, { Component } from 'react';

class LayerLayout extends Component {
    render() {

        const { width, height } = this.props;

        return (
            <div width={width} height={height}>
                {this.props.children}
            </div>
        );
    }
}

export default LayerLayout;