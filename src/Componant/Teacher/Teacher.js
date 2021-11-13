import React, { useState } from 'react';
import { CardGroup  , Row , Col} from 'react-bootstrap';
import { render } from 'react-dom';
import './Teacher.css'
import teacherData from '../Data/TeacherData';
import Load from './Load'
const Teacher = () => {
    const[data,setData]=useState(teacherData);

    return (
        <div>
          <div className="head fluid">  <h4>FACULTY MEMBERS</h4></div>
        <Row xs={100} md={3} className="g-10">
       
      
            {
                data.map(data=><Load data={data}></Load>)
            }
         
      
      </Row>
      </div>
    );
};

export default Teacher;