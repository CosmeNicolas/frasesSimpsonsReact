import React from 'react';
import homero from "../img/homero.png"
import { Card } from 'react-bootstrap';

const Frase = () => {
  return (
    <>
    <div className='border border-danger'>
      <h1 className='text-center text-light'>Homero</h1>
      <hr  className='mx-5'/>
      <img className='img-fluid' src={homero} alt=""/>
      <Card>
         <Card.Text>
          Aqui se colocara la frase simpsons de cada personaje 
        </Card.Text>
      </Card>
    </div>
    </>
  );
};

export default Frase;