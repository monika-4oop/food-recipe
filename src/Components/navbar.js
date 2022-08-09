import React from 'react';
import './navbar.css';
import {FiSearch} from 'react-icons/fi';
import {BsPersonCircle} from 'react-icons/bs';
import {GrCart} from 'react-icons/gr';
import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav>
      <ul className="list">
        <li className="items">
          <div className="logo">
            <div>
              <img
                src="https://thumbs.dreamstime.com/z/black-plant-sprout-icon-plant-eco-logo-plant-sprout-icon-plant-eco-logo-white-background-116061121.jpg"
                alt="logo"
              />
            </div>
            <div>
              <p>PLANTY's</p>
            </div>
          </div>
        </li>
        <li className="items">
          <div className="logo">
            <div>
              <p>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                  }}
                >
                  plants
                </Link>
              </p>
            </div>
            <div>
              <h6>
                <Link
                  to="/EatWell"
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  eatwell
                </Link>
              </h6>
            </div>
          </div>
        </li>
        <li className="items">
          <div className="logos">
            <div>
              <FiSearch />
            </div>
            <div>
              <BsPersonCircle />
            </div>
            <div>
              <GrCart />
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default navbar