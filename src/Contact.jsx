import React from "react";
import { Link } from "react-router-dom";
import './home.scss';
import './style.scss';
import logo2 from './logo2.png';
import clogo1 from './contact1.jpeg';

let Contact =() =>{
    return(
        <>
            <div className="row">
                <div className="col-6 formportion">
                <form className="cont">
                <h1>Contact Us</h1>
                <br />

                <div className="form-group">
                    <input type="text" className="form-control nm" placeholder="Name *" />
                </div>
                
                <div className="form-group">
                    <input type="text" className="form-control email" placeholder="Email *" />
                </div>
                
                <div class="form-group">
                    <textarea className="form-control textarea" rows="5" placeholder="Message"></textarea>
                </div>
                
                <div className="d-flex send-msg-div ">
                    <button type="submit" className="hvr-bounce-to-right send-msg">
                        Send Message to Us
                    </button>
                </div>
                </form>
                </div>
                <div className="col-6">
                    <div className="row addr-sec">
                        <div className="col-6 address">
                            <p className="college-name">Maulana Abul Kalam Azad University of Technology, West Bengal</p>
                            <p>NH-12(old NH-4) Simhat, Haringhata, Nadia-741249, West Bengal, India</p>
                            <p>Phone: (033) 2321 0731/1327</p>
                        </div>
                        <div className="col-6">
                            <img src={clogo1} alt="" className="contacting" />
                        </div>
                    </div>
                    <div class="map-responsive">
                    <iframe title="MAKAUT_Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2022117216698!2d88.54309953992052!3d22.95643696613416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bf5871a9e0d7%3A0x3cbdf3b9f157e355!2sMAKAUT%20MAIN%20CAMPUS!5e0!3m2!1sen!2sin!4v1630534417601!5m2!1sen!2sin" width="100%" height="auto" allowfullscreen="" loading="lazy" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>

            </div>
            <div className='footer'>
                <div className='footer1c'>
                    <h2>WELCOME TO</h2>
                    <p>Maulana Abul Kalam Azad University of Technology,
                        West Bengal Formerly West Bengal University of Technology
                        <p>(INDUSTRY CONNECT)</p></p>
                    <img src={logo2} alt='logo' />
                </div>

                <div className='footer2c'>
                    <h2>QUICK LINKS</h2>
                    <ul>
                        <li><Link className='footerlinks'>Events</Link></li>
                        <li><Link className='footerlinks'>Webinars</Link></li>
                        <li><Link className='footerlinks'>Community</Link></li>
                        <li><Link className='footerlinks'>TechTalks</Link></li>
                        <li><Link className='footerlinks'>Official Website</Link></li>
                    </ul>
                </div>

                <div className='footer3c'>
                    <div className='search'><input type='text' name='box' placeholder='Enter Email' />
                        <button>Subscribe</button></div>
                    <div className='footer3c2r'>
                        <div>
                            <ul>
                                <li><Link className='footerlinks'>Blog Post</Link></li>
                                <li><Link className='footerlinks'>YouTube</Link></li>
                                <li><Link className='footerlinks'>Facebook</Link></li>
                                <li><Link className='footerlinks'>Linkdin</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><Link className='footerlinks'>Terms Of Use</Link></li>
                                <li><Link className='footerlinks'>Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/*======================= copyright ===========================*/}
            
            <div className="copy">Copyright &copy; 2021 | Designed and Developed by MAKAUT,WB</div>
        </>
    );
};

export default Contact;