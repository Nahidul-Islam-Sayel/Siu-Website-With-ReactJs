import React from 'react';

const Output = (props) => {
    console.log(props.data)
    return (
        <div>
            <img src={props.data.image} alt=""/>
            <h5>{props.data.dis}</h5>
        </div>
    );
};

export default Output;