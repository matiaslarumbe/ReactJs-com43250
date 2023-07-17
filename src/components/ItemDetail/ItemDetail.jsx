import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({producto}) => {
    
    const onAdd = (quantity) =>{
        console.log(`Agregaste ${quantity} de productos al carrito`)
    }

  return (
    <Card style={{ width: '100%' }}>
            
    <Card.Img variant="top" src={producto.image} alt={producto.name}/>
      
       <Card.Body>
           
           <Card.Title>{producto.name}</Card.Title>
           <Card.Text>
                    {producto.description}
           </Card.Text> 
           <Card.Text>
                   $ {producto.price}
           </Card.Text> 
       </Card.Body>
        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
   </Card>
  )
}

export default ItemDetail