import React from 'react';
import homero from "../img/homero.png"

const Frase = () => {
  return (
    <>
      <h1 className='text-center text-light'>Homero</h1>
      <img className='img-fluid' src={homero} alt=""/>
    </>
  );
};

export default Frase;