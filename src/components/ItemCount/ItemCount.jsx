import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar}) => {
 

  return (
    <div className='item-count'>
      <div className='item-count-buttons'>
        <Button onClick={handleRestar} className="btn">-</Button>
            <p>{cantidad}</p>
        <Button onClick={handleSumar} className="btn">+</Button>
      </div>
      <Button onClick={handleAgregar}>
       Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
