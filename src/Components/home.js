import React from 'react';
import './home.css';
import Navbar from "./navbar";
import Footer from "./footer";
import plant from '../Components/img/plant.jpg';
import banner from '../Components/img/banner.jpg';
import limg from '../Components/img/limg.jpg';
import rimg from '../Components/img/rimg.jpg';


import {BsArrowLeftCircle, BsArrowRightCircle, BsFillArrowRightCircleFill} from 'react-icons/bs';

function home() {
  return (
    <>
    <Navbar/>
    <div className="content">
        <div className="space"></div>
   <div className="conatiner">
    
        <div className="left-container">
            <div className="left-box">
            <div className="upper-box">Best house plants varieties.</div>
            <div className="btn-div">
                <button className="button-box">Shop Now</button>
            <button className="btn-box "></button>
            </div>
            <div className="lower-box">
                <div className="first-heading">Beautiful living greenery for homes and offices</div>
                <div className="sec-heading" >Wer've been mentioned in the press</div>
                <div className="third-heading">
                    <div>Bloomberg</div>
                    <div>Forbes</div>
                </div>
            </div>
            </div>
        </div>
        <div className="right-container">
            <div className="right-box">
        <img src={plant} className="logoimg" alt=""/>
        </div>
        </div>
    </div>
    <div className="texting">
        <div className="upper-text"> Each houseplant set is handled quickly and safely
before being sent to your destination in specially
designed insulated packaging.</div>
        <div className="lower-text">Learn how ve take care of your plant
at every stage of its journey from our
greenhouse to your home.</div>
    </div>
    <div className="banner-container">
     <div className="banner">
     <div><img src={banner} alt=""/></div>
    </div>
   
 </div>
 <div className="banner-lastdiv">
        <div className="step-text">STEP1</div>
        <div className="promise">We put everything together</div>
        <div className="banner-icon">
            <div><BsArrowLeftCircle size={24}/></div>
            <div><BsArrowRightCircle size={24}/></div>
        </div>
     </div>
     <div className="images">
        <div className="l-image">
        
        <img src={limg} alt=""/>
        </div>
        <div className="r-image">
        <img src={rimg} alt=""/>
        </div>
     </div>
     <div className="last-image">
        <div className="full-img">
            <div className="image-text">
            <h1>Get inspired from our Instagram</h1>
            <h6>If you use the hashtag #bioomey on Instagram, well spotlight you.</h6>
            </div>
            <div className="checking">
                <div>Check it out</div>
                <div><BsFillArrowRightCircleFill size={20}/> </div>
            </div>
        </div>
     </div>
     <div className="heading-text">
        <div>Stay update with special offers, plant-parenting tips, and more.</div>
        <div className="heading-box">
            <div><p>Your Email </p></div>
            <div><button>Suscribe</button></div>
        </div>
     </div>
  


 </div>
 <Footer/>
 </>
  
  )
}

export default home