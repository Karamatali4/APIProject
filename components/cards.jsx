import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ img, name, capital,imgsize,imgh }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }} className='text-center mb-5'>
      <Card.Img variant="top" src={img} className='img-fluid' style={{width:imgsize,height:imgh}}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{capital}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
