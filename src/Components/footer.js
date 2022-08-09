import React from 'react';
import './footer.css';
import {FiSearch} from 'react-icons/fi';
import {BsPersonCircle} from 'react-icons/bs';
import {GrCart} from 'react-icons/gr';
function footer() {
  return (
    <div className="footer-div">
      <ul className="footerlist">
          <li className="items-icon">
            <div className="logo">
            <div><img src="https://thumbs.dreamstime.com/z/black-plant-sprout-icon-plant-eco-logo-plant-sprout-icon-plant-eco-logo-white-background-116061121.jpg" alt='logo'/>
            </div>
            <div><p>PLANTY</p></div>
            </div>
            </li>
          <li className="items">
          <div className="logo">
            <div><p>Help</p>
            </div>
            <div><p>Contact Us</p></div>
            <div><p>Privacy & Terms</p></div>
            </div>

          </li>
          <li className="items">
          <div className="logos">
            <div><FiSearch/></div>
            <div><BsPersonCircle/></div>
            <div><GrCart/></div>
            </div>

          </li>
        </ul>
    </div>
  )
}

export default footer