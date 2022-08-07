import React from 'react';
import './home.css';
import plant from '../Components/img/plant.jpg';
function home() {
  return (
   
   <div className="conatiner">
        <div className="left-container">
            <div className="upper-box">Best house plants varieties.</div>
            <button>Shop Now</button>
            <div className="lower-box"></div>
        </div>
        <div className="right-container">
        <img src={plant} className="logoimg" alt=""/>
        </div>
   </div>
  
  )
}

export default home