import React from 'react';
import './Message.css'

const Message = () => {
    return (
        <div className="row fluid">
            <h5 className="res">Message From Dept. Head</h5>
            <div className="col-md-6 fluid">
                <img src="http://siu.edu.bd/static/awal_sir.jpg" alt="" srcset=""/>
            </div>
            <div className="col-md-6 fulid">
                <p>
                Welcome to the Computer Science and Engineering Department of Sylhet International University. You are here because you dream of a future with a strong foundation in knowledge and skill in the world of technology. We, the teachers of this department, nurture a congenial atmosphere for self-development. With utmost sincerity everyone here strives for the continual development of self and society. Our students enjoy what they learn and get hands on experience of all possible applications of the knowledge they gather. Thus, knowledge and practical application are developed hand in hand. The department offers a healthy atmosphere of competitiveness in both skill development and academic research through initiatives of the SIU Computer Society, Center for Research, Testing & Consultancy (CRTC), Programmer’s Den etc. The academic atmosphere is enhanced by.......
                </p>
            </div>
        </div>
    );
};

export default Message;