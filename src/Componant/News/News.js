import React, { Component , useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import newsdata from '../Data/NewsData'
import Output from './Output'
const News = () => {
    const[nData,setData]=useState(newsdata);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="body">
     <h1 id="notice">News & Events</h1>
      <Slider {...settings}>{
     nData.map(data=><Output data={data}></Output>)
      }
        
      </Slider>
    </div>
  );
};

export default News;