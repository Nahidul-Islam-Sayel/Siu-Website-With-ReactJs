import React, { Component , useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import notice from '../Data/NoticeData'
import Slid from './Slid'
import './Alice.css'
const Responsive = () => {
  const[Data,useData]= useState(notice);
  console.log(Data);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="body">
     <h1 id="notice">Notice</h1>
      <Slider {...settings}>{
        Data.map(data=><Slid data={data}></Slid>)
      }
        
      </Slider>
    </div>
  );
};

export default Responsive;