import React from 'react';
import { Card , CardGroup, Col} from 'react-bootstrap';
import './Load.css'
const Load = (props) => {
    const{img, Name, pos, Mobile, Email}=props.data;
     console.log(pos)
    return (
   <Col>
     
     <Card id="Card">
       
    <Card.Img id="img" variant="top" src={props.data.img} />
             <Card.Body>
      <Card.Title>{Name}</Card.Title>
      <Card.Text>
       
      <p>{pos}</p>
      <p>{Mobile}</p>
      <p>{Email}</p>

       
      </Card.Text>
    </Card.Body>
 
  </Card>

    </Col>


        
    );
};

export default Load;