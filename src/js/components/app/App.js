import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from 'pages/Home';
import NotFound from 'pages/NotFound';


import "styles/App.scss";

class App extends Component {
    render() {
        return (
            <div id="app" className="app-container">
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/home' component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </div>  
        );
    }
}

export default App;
