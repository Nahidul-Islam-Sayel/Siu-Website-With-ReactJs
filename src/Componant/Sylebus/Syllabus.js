import React, { useState } from 'react';
import './Syllabus.css'
const Syllabus = () => {
    const[oneone,setOneOne]= useState(false);
    const[onetwo,setOneTwo]= useState(false);
    const[twoone,setTwoOne]= useState(false);
    const[twotwo,setTwoTwo]= useState(false);
    const[threeone,setThreeOne]= useState(false);
    const[threetwo,setThreeTwo]= useState(false);
    const[fourone,setFourOne]= useState(false);
    const[fourtwo,setFourTwo]= useState(false);
    return (
        <div className="container-fluid">
        <div className="header container-fluid">
        <h1>SYLLABUS</h1>
        </div>
          <div className="semister">
              <div className="sem">
                  <div className="sim">
                  <h5>1st Year:  Semister  1</h5>
                  <button onClick={()=>setOneOne(!oneone)}>  {oneone?'-':'+'}</button>
                  </div>
            
                  
              </div>
              <div>
                 {oneone&&<table class="table">
  <thead>
    <tr>

      <th scope="col">Course Title</th>
      <th scope="col">Course Code</th>
      <th scope="col">Credits Hours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">CSE-101</th>
      <td>Computer Fundamentals</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th scope="row">CSE-102</th>
      <td>Computer Fundamentals Lab</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th scope="row">PHY-101</th>
      <td>Mechanics, Properties of Matter, Waves. Optics, Heat and thermodynamics</td>
    <td>3.0</td>
    </tr>
  </tbody>
</table>}
                 </div>
              <div className="sem">
                  <div className="sim">
                  <h5>1st Year:  Semister 2</h5>
                  <button onClick={()=>setOneTwo(!onetwo)}>  {onetwo?'-':'+'}</button>
              </div>
              </div>
              <div>
                 {onetwo&&<table class="table">
  <thead>
    <tr>

      <th scope="col">Course Title</th>
      <th scope="col">Course Code</th>
      <th scope="col">Credits Hours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">CSE-101</th>
      <td>Computer Fundamentals</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th scope="row">CSE-102</th>
      <td>Computer Fundamentals Lab</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th scope="row">PHY-101</th>
      <td>Mechanics, Properties of Matter, Waves. Optics, Heat and thermodynamics</td>
    <td>3.0</td>
    </tr>
  </tbody>
</table>}
                 </div>
              <div className="sem">
                  <div className="sim">
                  <h5>2nd Year: Semister 1</h5>
                  <button onClick={()=>setTwoOne(!twoone)}>  {twoone?'-':'+'}</button>
              </div>
            
              </div>
              <div>
                 {twoone&&<table class="table">
  <thead>
    <tr>

      <th scope="col">Course Title</th>
      <th scope="col">Course Code</th>
      <th scope="col">Credits Hours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">CSE-101</th>
      <td>Computer Fundamentals</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th scope="row">CSE-102</th>
      <td>Computer Fundamentals Lab</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th scope="row">PHY-101</th>
      <td>Mechanics, Properties of Matter, Waves. Optics, Heat and thermodynamics</td>
    <td>3.0</td>
    </tr>
  </tbody>
</table>}
                 </div>
              <div className="sem">
                  <div className="sim">
                  <h5>2nd Year: Semister 2</h5>
                  <button onClick={()=>setTwoTwo(!twotwo)}>  {twotwo?'-':'+'}</button>

                  </div>
                  
              </div>
              <div>
                 {twotwo&&<table class="table">
  <thead>
    <tr>

      <th scope="col">Course Title</th>
      <th scope="col">Course Code</th>
      <th scope="col">Credits Hours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">CSE-101</th>
      <td>Computer Fundamentals</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th scope="row">CSE-102</th>
      <td>Computer Fundamentals Lab</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th scope="row">PHY-101</th>
      <td>Mechanics, Properties of Matter, Waves. Optics, Heat and thermodynamics</td>
    <td>3.0</td>
    </tr>
  </tbody>
</table>}
                 </div>
               
            
              <div className="sem">
                  <div className="sim">
                  <h5>3rd Year: Semister 1</h5>
                  <button onClick={()=>setThreeOne(!threeone)}>  {threeone?'-':'+'}</button>
                  </div>
                
              </div>
              <div>
                 {threeone&&<table class="table">
  <thead>
    <tr>

      <th scope="col">Course Title</th>
      <th scope="col">Course Code</th>
      <th scope="col">Credits Hours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">CSE-101</th>
      <td>Computer Fundamentals</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th scope="row">CSE-102</th>
      <td>Computer Fundamentals Lab</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th scope="row">PHY-101</th>
      <td>Mechanics, Properties of Matter, Waves. Optics, Heat and thermodynamics</td>
    <td>3.0</td>
    </tr>
  </tbody>
</table>}
                 </div>
              <div className="sem">
                  <div className="sim">
                  <h5>3rd Year: Semister 2</h5>
                  <button onClick={()=>setThreeTwo(!threetwo)}>  {threetwo?'-':'+'}</button>
                  </div>
                 
              </div>
              <div>
                 {threetwo&&<table class="table">
  <thead>
    <tr>

      <th scope="col">Course Title</th>
      <th scope="col">Course Code</th>
      <th scope="col">Credits Hours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">CSE-101</th>
      <td>Computer Fundamentals</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th scope="row">CSE-102</th>
      <td>Computer Fundamentals Lab</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th scope="row">PHY-101</th>
      <td>Mechanics, Properties of Matter, Waves. Optics, Heat and thermodynamics</td>
    <td>3.0</td>
    </tr>
  </tbody>
</table>}
                 </div>
              <div className="sem">
                  <div className="sim">
                  <h5>4th Year: Semister 1</h5>
                  <button onClick={()=>setFourOne(!fourone)}>  {fourone?'-':'+'}</button>
                  </div>
                  
              </div>
              <div>
                 {fourone&&<table class="table">
  <thead>
    <tr>

      <th scope="col">Course Title</th>
      <th scope="col">Course Code</th>
      <th scope="col">Credits Hours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">CSE-101</th>
      <td>Computer Fundamentals</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th scope="row">CSE-102</th>
      <td>Computer Fundamentals Lab</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th scope="row">PHY-101</th>
      <td>Mechanics, Properties of Matter, Waves. Optics, Heat and thermodynamics</td>
    <td>3.0</td>
    </tr>
  </tbody>
</table>}
                 </div>
              
              <div className="sem">
              <div className="sim">
                  <h5>4th Year: Semister 2</h5>
                  <button onClick={()=>setFourTwo(!fourtwo)}>  {fourtwo?'-':'+'}</button>
                  </div>
              </div>
              <div>
                 {fourtwo&&<table class="table">
  <thead>
    <tr>

      <th scope="col">Course Title</th>
      <th scope="col">Course Code</th>
      <th scope="col">Credits Hours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">CSE-101</th>
      <td>Computer Fundamentals</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th scope="row">CSE-102</th>
      <td>Computer Fundamentals Lab</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th scope="row">PHY-101</th>
      <td>Mechanics, Properties of Matter, Waves. Optics, Heat and thermodynamics</td>
    <td>3.0</td>
    </tr>
  </tbody>
</table>}
                 </div>
              
        </div> 
            </div>
      
    );
};

export default Syllabus;