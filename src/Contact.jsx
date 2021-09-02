import React from "react";
import { Link } from "react-router-dom";
import './home.scss';
import './style.scss';
import Lottie from "lottie-react";
import lott5 from './lott5.json';

let Contact = () => {
    return (
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
                <Lottie className="ablot" animationData={lott5} style={{ height: "auto" }} />
                </div>
            </div>
            <div class="map-responsive">
            <iframe title="MAKAUT_Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2022117216698!2d88.54309953992052!3d22.95643696613416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bf5871a9e0d7%3A0x3cbdf3b9f157e355!2sMAKAUT%20MAIN%20CAMPUS!5e0!3m2!1sen!2sin!4v1630534417601!5m2!1sen!2sin" width="100%" height="auto" allowfullscreen="" loading="lazy" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
            {/* <div className="maincontact">
                <div className='formdiv'>
                    <div>
                        <h1>Contact Us</h1>
                        <form>
                            <input type="text" className="form-control nm" placeholder="Name *" />
                            <input type="text" className="form-control email" placeholder="Email *" />
                            <textarea className="form-control textarea" rows="5" placeholder="Message"></textarea>
                            <button type="submit" className="hvr-bounce-to-right send-msg">Send Message to Us</button>
                        </form>
                    </div>
                </div>
                <div className='adrsdiv'>
                    <div className='adrsdiv0'>
                        <div className='adrsdiv1'>
                            <p className="collegename">Maulana Abul Kalam Azad University of Technology, West Bengal</p>
                            <p>NH-12(old NH-4) Simhat, Haringhata, Nadia-741249, West Bengal, India</p>
                            <p>Phone: (033) 2321 0731/1327</p>
                        </div>
                        <div className='adrsdiv01'>
                            <Lottie className="ablot" animationData={lott5} style={{ height: "auto" }} />
                        </div>
                    </div>
                    <div className='adrsdiv2'>
                        <iframe title="MAKAUT_Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2022117216698!2d88.54309953992052!3d22.95643696613416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bf5871a9e0d7%3A0x3cbdf3b9f157e355!2sMAKAUT%20MAIN%20CAMPUS!5e0!3m2!1sen!2sin!4v1630534417601!5m2!1sen!2sin" width="100%" height="300px" allowfullscreen="" loading="lazy" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
                </div> */}
            </div>
        </>
    );
};

export default Contact;