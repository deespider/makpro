import React from "react";
import './Nav.scss';
import { Link, NavLink } from "react-router-dom";
import logo from './flogo.png';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

let Nav = () => {
  return (<>
    <div className='lebudiv'>
      <div>
        <FaFacebook className='fafa' /><a href='https://www.facebook.com/Makaut-183906109032533' target='blank'>Facebook</a>
        <FaLinkedin className='fafa' /><a href='https://www.linkedin.com/company/makaut-wb/' target='blank'>Linkdin</a>
        <FaYoutube className='fafa' /><a href='https://www.youtube.com/channel/UCQhp1Nvxj4r0Ehkuoc7X-zQ' target='blank'>YouTube</a>
      </div>
      <div>Welcom To Makaut Industry Connect</div>
    </div>
    <header>
      <div className='logo'>
        <Link className="logolink " to="/"><img src={logo} alt='logo' /></Link></div>
      <div className='menu'>
        <ul className='navul'>
          <li className='lili'><NavLink activeClassName="activeitem" className='menuitem' to='/' exact={true}>Home</NavLink></li>
          <li className='lili'><NavLink activeClassName="activeitem" className='menuitem' to='/About' exact={true}>About</NavLink></li>
          <li className='lili' id='lili1'>EVENTS
            <div>
              <li><Link className='drpbtnlnk'  to='/Techtalk' exact={true}>TechTalks</Link></li>
              <li><Link className='drpbtnlnk' to='/Webinar' exact={true}>Webinars</Link></li>
            </div>
          </li>
          <li className='lili'><NavLink activeClassName="activeitem" className='menuitem' to='/Services' exact={true}>Services</NavLink></li>
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