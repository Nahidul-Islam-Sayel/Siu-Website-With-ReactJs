import React, { Component ,useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import data from '../Data/Data'
import Cal from '../Cal/Cal'
const Animation = () => {
   const[Data,setData]=useState(data);
   console.log(Data)
  
    return (
       
            <Carousel>
  { 
    Data.map(data=><Cal data={data}></Cal>)
}
   
    </Carousel>
      
    );
};

export default Animation;