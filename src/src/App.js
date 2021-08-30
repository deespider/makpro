import React from 'react';
import './Nav.scss'
import Home from './Home';
import About from './About';
import Nav from './Nav';
import Events from './Events';
import Contact from './Contact';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
    return (
        <>
        <Nav/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Events" component={Events}/>
        <Route exact path="/Contact" component={Contact}/>
        <Redirect to="/"/>
        </Switch>
        </>
    )
}

export default App;

