import React from "react";
import './Nav.scss';
import { Link, NavLink } from "react-router-dom";
import logo from './logo.jpeg';

let Nav = () => {
  return (<>
    <header>
      <div className='logo'>
        <Link className="logolink " to="/"><img src={logo} alt='logo' /></Link></div>
      <div className='menu'>
        <ul>
          <li><NavLink activeClassName="activeitem" className='menuitem' to='/' exact={true}>Home</NavLink></li>
          <li><NavLink activeClassName="activeitem" className='menuitem' to='/About' exact={true}>About</NavLink></li>
          <li><NavLink activeClassName="activeitem" className='menuitem' to='/Events' exact={true}>Events</NavLink></li>
          <li><NavLink activeClassName="activeitem" className='menuitem' to='/Events' exact={true}>Post</NavLink></li>
        </ul>
      </div>
      <div className='nav_button'>
        <button><Link className='contact' to='/Contact'>Contact</Link></button>
      </div>
    </header>
  </>
  );
};

export default Nav;