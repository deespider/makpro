import React from "react";
import { Link } from "react-router-dom";
import './home.scss';
import img1 from './campus.png';
import Lottie from "lottie-react";
import lott from './lott.json'
import lott2 from './lott2.json'
import img2 from './campusprt.png';

let Home = () => {
    return (
        <>

            {/*====================== banner =======================*/}
            <div className='banner'>
                <div className='space'>
                    <div className='banner_cont'>
                        <div className='banner_cont_divc'>
                            <p className='banner_cont_p1'>Welcome To</p>
                            <p className='banner_cont_p2'> MAKAUT </p>
                            <p className='banner_cont_p3'>INDUSTRY CONNECT</p>
                            <p className='banner_cont_p4'>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed eleifend, velit eu cursus vulputate,
                                justo nisi pretium orci, a mollis augue metus nec risus.</p>
                            <button className='banner_button'><Link className='banner_buttonL' to='/Services'>Explore Now</Link></button>
                        </div>
                    </div>
                    <div className='banner_img'>
                        <img src={img1} alt="campus" />
                    </div>
                </div>

                <div className='webinar'>
                    <div>
                        <h1>OUR UPCOMMING WEBINARS</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed eleifend, velit eu cursus vulputate, justo nisi pretium orci,
                            a mollis augue metus nec risus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed eleifend, velit eu cursus vulputate, justo nisi pretium orci,
                            a mollis augue metus nec risus.</p>
                    </div>
                    <button>Click Here</button>
                </div>
            </div>

            {/*======================== Common Divs =======================*/}

            <div className='homediv1'>
                <div className='homediv11'>
                    <h1 className='h11'>Our <span>Tech Talks</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed eleifend, velit eu cursus vulputate, justo nisi pretium orci,
                        a mollis augue metus nec risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed eleifend, velit eu cursus vulputate, justo nisi pretium orci,
                        a mollis augue metus nec risus.</p>
                    <Link className='homediv11b'><button>Click Here</button></Link>
                </div>
                <div className="lot1">
                    <Lottie animationData={lott} style={{ height: "auto" }} />
                </div>
            </div>

            <div className='homediv2'>
                <div className='homediv21'>
                    <h1 className='h11'>Upcoming <span>Events</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed eleifend, velit eu cursus vulputate, justo nisi pretium orci,
                        a mollis augue metus nec risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed eleifend, velit eu cursus vulputate, justo nisi pretium orci,
                        a mollis augue metus nec risus.</p>
                    <Link className='homediv21b'><button>Click Here</button></Link>
                </div>
                <div className="lot2">
                    <Lottie animationData={lott2} style={{ height: "auto" }} />
                </div>
            </div>

            {/*================== campus partner ================*/}
            <div className='cp'>
                <div className="cpp"><h1 className='h11'>SOME OF OUR CAMPUSING <span>PARTNERS</span></h1></div>
                <div className='cpimage'><img src={img2} alt='campussing partner' /></div>
            </div>
            <div className='lasthome'></div>


        </>
    );
};

export default Home;