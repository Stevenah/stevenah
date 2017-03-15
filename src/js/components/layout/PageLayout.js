import React, { Component } from 'react';

const style = {
    width: '100%',
    minHeight: '30em',
};

class PageLayout extends Component {  
    render() {
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default PageLayout;