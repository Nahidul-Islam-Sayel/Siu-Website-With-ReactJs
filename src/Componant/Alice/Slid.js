import React from 'react';
import './Slid.css'
const Slid = (props) => {
    console.log(props.data)
    return (
        <div className="xyz">
            <img src={props.data.src} alt="" srcset=""/>
            <h6>{props.data.dis}</h6>
        </div>
    );
};

export default Slid;