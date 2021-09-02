import React from 'react';
import './App.Scss'
import './Nav.scss'
import Home from './Home';
import About from './About';
import Nav from './Nav';
import Events from './Events';
import Contact from './Contact';
import Services from './Services';
import Techtalk from './Techtalk';
import Webinar from './Webinar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Footer';

const App = () => {
    return (
        <>
        <Nav/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Events" component={Events}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Services" component={Services}/>
        <Route exact path="/Techtalk" component={Techtalk}/>
        <Route exact path="/Webinar" component={Webinar}/>

        <Redirect to="/"/>
        </Switch>
        <Footer/>
        </>
    )
}

export default App;

