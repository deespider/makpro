import React from "react";
import './Nav.scss';
import { Link, NavLink } from "react-router-dom";
let Nav = () => {
  return (<>
    <header className="row">
      <div className='logo col-2'>
        <Link className="logolink" to="/">MIC</Link></div>
      <div className='menu'>
        <ul className="col-sm-8">
          
          <li><NavLink activeClassName="activeitem" className='menuitem' to='/' exact={true}>Home</NavLink></li>
          <li><NavLink activeClassName="activeitem" className='menuitem' to='/About' exact={true}>About</NavLink></li>
          <li><NavLink activeClassName="activeitem" className='menuitem' to='/Events' exact={true}>Events</NavLink></li>
          <li><NavLink activeClassName="activeitem" className='menuitem' to='/Events' exact={true}>Post</NavLink></li>
          
        </ul>
      </div>
      <div className='nav_button col-2'>
        <button><Link className='contact' to='/Contact'>Contact</Link></button>
      </div> 
    </header>
  </>
  );
};

export default Nav;