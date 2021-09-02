import React from 'react';
import { Link } from "react-router-dom";
import logo3 from './flogo.png';
import './footer.scss';
let Footer = () =>{
    return(
        <>
            {/*======================= Footer ======================*/}
            <div className='footer'>
                <div className='footer1c'>
                    <h2>WELCOME TO</h2>
                    <p>Maulana Abul Kalam Azad University of Technology,
                        West Bengal Formerly West Bengal University of Technology
                        <p><Link to='/' className='footerlink1'>(INDUSTRY CONNECT)</Link></p> </p>
                    <img src={logo3} alt='logo' />
                </div>

                <div className='footer2c'>
                    <h2>QUICK LINKS</h2>
                    <ul>
                        <li><Link className='footerlinks' to='/Webinar'>Webinars</Link></li>
                        <li><Link className='footerlinks' to=''>Community</Link></li>
                        <li><Link className='footerlinks' to='/Techtalk'>TechTalks</Link></li>
                        <li><a className='footerlinks' href='https://makautwb.ac.in/' target='blank'>Official Website</a></li>
                    </ul>
                </div>

                <div className='footer3c'>
                    <div className='search'><input type='text' name='box' placeholder='Enter Email' />
                        <button>Subscribe</button></div>
                    <div className='footer3c2r'>
                        <div>
                            <ul>
                                <li><a className='footerlinks' href='https://allinfomakaut.blogspot.com/' target='blank'>Blog Post</a></li>
                                <li><a className='footerlinks' href='https://www.youtube.com/channel/UCQhp1Nvxj4r0Ehkuoc7X-zQ' target='blank'>YouTube</a></li>
                                <li><a className='footerlinks' href='https://www.facebook.com/Makaut-183906109032533/' target='blank'>Facebook</a></li>
                                <li><a className='footerlinks' href='https://www.linkedin.com/school/maulana-abul-kalam-azad-university-of-technology-west-bengal/?originalSubdomain=in' target='blank'>Linkdin</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><a className='footerlinks' href=''>Terms Of Use</a></li>
                                <li><a className='footerlinks' href=''>Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/*======================= copyright ===========================*/}
            
            <div className="copy">Copyright &copy; 2021 | Designed and Developed by MAKAUT,WB</div>
        </>
    )
};

export default Footer;