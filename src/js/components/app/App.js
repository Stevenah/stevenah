import React, { Component } from 'react';
import Header from 'components/app/Header';
import Footer from 'components/app/Footer';
import About from 'pages/About';
import Blog from 'pages/Blog';
import Home from 'pages/Home';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import 'css/App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="App-body">
                    <Router history={hashHistory}>
                        <Route path="/">
                            <IndexRoute component={Home}/>
                            <Route path="home" component={Home}/>
                            <Route path="about" component={About}/>
                            <Route path="blog" component={Blog}/>
                        </Route>
                    </Router>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
