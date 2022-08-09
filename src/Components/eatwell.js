import React, { useEffect } from "react";
import Navbar from "./navbar";
import "./eatwell.css";
import Footer from "../Components/footer";
import first from '../Components/img/first.png';
import {BsArrowRightCircle} from 'react-icons/bs';
import { Link } from "react-router-dom";
import Detail from '../Components/detail';
import Data from '../../src/Data/data.json';
import Card from '../../src/Components/card';
import {HiArrowSmRight} from 'react-icons/hi';


function eatwell() {
  console.log("data", Data)
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="heading_continaer">
          <h1> Eat well screen heading goes right here 🍎</h1>
        </div>
        <div className="card-wrraper">
        <div className="heading">
          <div>Breakfast</div>
          <div className='viewall'>View all<HiArrowSmRight/></div>
        </div>
       <div className="card">
        {
          Data.map((item,index)=>{
           console.log("img", item.recipe_img )
             return  <Card image={item.recipe_img} name={item.recipe_name} link={item.recipe_link}/>
                 
          })
        }
        </div>
        </div>

        <div className="card-wrraper">
        <div className="heading">
          <div>Lunch</div>
          <div className='viewall'>View all<HiArrowSmRight/></div>
        </div>
       <div className="card">
        {
          Data.map((item,index)=>{
           console.log("img", item.recipe_img )
             return  <Card image={item.recipe_img} name={item.recipe_name} link={item.recipe_link}/>
                 
          })
        }
        </div>
        </div>

        <div className="card-wrraper">
        <div className="heading">
          <div>Dinner</div>
          <div className='viewall'>View all<HiArrowSmRight/></div>
        </div>
       <div className="card">
        {
          Data.map((item,index)=>{
           console.log("img", item.recipe_img )
             return  <Card image={item.recipe_img} name={item.recipe_name} link={item.recipe_link}/>
                 
          })
        }
        </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default eatwell;
