import React from 'react'
import Home from './Home';
import About from './About';
import Nav from './Nav';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
    return (
        <>
        <Nav/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Redirect to="/"/>
        </Switch>
        </>
    )
}

export default App;

