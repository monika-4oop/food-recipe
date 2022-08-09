import React, { useEffect } from "react";
import Navbar from "./navbar";
import "./detail.css";
import Footer from "../Components/footer";
import first from '../Components/img/first.png';
import Rectangle from '../Components/img/Rectangle.png'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Detail() {
    const location= useLocation();
    const {youtube}= location.state;
    console.log("you", youtube)
  return (
    
    <>
      <Navbar />
      <div className="container">
        <div className="heading_continaer">
          <h1>Recipe 1 title here</h1>
        </div>
        <div className="card-wrraper">
          
       <a href={youtube} className="">
       <div className="box-card">
                <img className="banner-image" src={Rectangle} alt=""/>
        </div>
        </a>

        <div className="steps">
        <div className="recipe">Recipe</div>

           <div className="steping">
            <li><b>Step 1 </b>
                Aenean vulputate eleifend tellus aenean
                 leo ligula porttitor eu consequat vitae,
                  eleifend ac, enim aliquam lorem ante 
                  dapibus in viverra quis.
               
            </li>
            <li><b>Step 2 </b>
                Aenean vulputate eleifend tellus aenean
                 leo ligula porttitor eu consequat vitae,
                  eleifend ac, enim aliquam lorem ante 
                  dapibus in viverra quis.
               
            </li>
            <li><b>Step 3 </b>
                Aenean vulputate eleifend tellus aenean
                 leo ligula porttitor eu consequat vitae,
                  eleifend ac, enim aliquam lorem ante 
                  dapibus in viverra quis.
               
            </li>
            </div>
           
        </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Detail;
