import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({product}) => {
    
    const onAdd = (quantity) =>{
        console.log(`Agregaste ${quantity} de productos al carrito`)
    }

  return (
    <Card style={{ width: '100%' }}>
            
    <Card.Img variant="top" src={product.image} alt={product.name}/>
      
       <Card.Body>
           
           <Card.Title>{product.name}</Card.Title>
           <Card.Text>
                    {product.description}
           </Card.Text> 
           <Card.Text>
                   $ {product.price}
           </Card.Text> 
       </Card.Body>
        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
   </Card>
  )
}

export default ItemDetail