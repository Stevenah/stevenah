import React, { Component } from 'react';
import About from 'pages/About';
import Blog from 'pages/Blog';
import Resume from 'pages/Resume';
import Games from 'pages/Games';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Layout from 'components/layout/Layout';
import { Route, Switch } from 'react-router-dom'
import "style/App.scss";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/blog' component={Blog} />
                <Route path='/resume' component={Resume} />
                <Route path='/games' component={Games} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default App;
