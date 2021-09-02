import React from "react";
import './home.scss';
import './About.scss';
import Lottie from "lottie-react";
import lott4 from './lott4.json';

let About = () => {
    return (
        <>
            <div className='abmain'>
                <div className="absub">
                    <h1>MIC About Us Page Demo</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia vel tempora eveniet totam ipsam, error amet harum doloribus,
                        assumenda quae reiciendis odio commodi nulla
                        voluptas quam sit ad ut quis neque rerum, molestiae consequatur.
                        Necessitatibus exercitationem voluptates corrupti quas similique
                        optio quo expedita itaque ipsam nam dolorem repudiandae, distinctio voluptas?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia vel tempora eveniet totam ipsam, error amet harum doloribus,
                        assumenda quae reiciendis odio commodi nulla
                        voluptas quam sit ad ut quis neque rerum, molestiae consequatur.
                        Necessitatibus exercitationem voluptates corrupti quas similique
                        optio quo expedita itaque ipsam nam dolorem repudiandae, distinctio voluptas?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia vel tempora eveniet totam ipsam, error amet harum doloribus,
                        assumenda quae reiciendis odio commodi nulla
                        voluptas quam sit ad ut quis neque rerum, molestiae consequatur.
                        Necessitatibus exercitationem voluptates corrupti quas similique
                        optio quo expedita itaque ipsam nam dolorem repudiandae, distinctio voluptas?</p>
                </div>
                <div className="absub2">
                    <Lottie className="ablot" animationData={lott4} style={{ height: "auto" }} />
                </div>

            </div>
        </>
    );
};

export default About;
