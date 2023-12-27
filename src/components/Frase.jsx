import React from 'react';
import homero from "../img/homero.png"
import { Card } from 'react-bootstrap';

const Frase = () => {
  return (
    <>
      <h1 className='text-center text-light'>Homero</h1>
      <img className='img-fluid' src={homero} alt=""/>
      <Card>
         <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card>
    </>
  );
};

export default Frase;