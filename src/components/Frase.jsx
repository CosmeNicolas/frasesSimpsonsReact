import React from 'react';
import { Card } from 'react-bootstrap';

const Frase = ({frasePersonajeProps}) => {
  return (
    <>
    <div>
      <h1 className='text-center '>{frasePersonajeProps.character}</h1>
      <hr  className='mx-5'/>
      <img className='img-fluid' src={frasePersonajeProps.image} alt=""/>
      <Card>
         <Card.Text>
          {frasePersonajeProps.quote}
        </Card.Text>
      </Card>
    </div>
    </>
  );
};

export default Frase;