import React from 'react';

const Cal = (props) => {
   const{image,dis}=props.data;
   console.log(dis);
    return (
        
        <div className="fluid">
            <img src={image} />
                    <p className="legend">{dis}</p>
            </div>
       
    );
};

export default Cal;
