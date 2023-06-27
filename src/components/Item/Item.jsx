import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Item = ({product}) => {
  return (
    <Card style={{ width: '18rem' }}>
            
    <Card.Img variant="top" src={product.image} />
      
       <Card.Body>
           
           <Card.Title>{product.name}</Card.Title>
           <Card.Text>
                    {product.description}
           </Card.Text> 
           
           <div className ="button-container"> 
           
               <Button as={Link} to={`/item/${product.id}`} variant="primary" >Ver Producto</Button>
        
           
           </div> 
       </Card.Body>
     
   </Card>
  )
}

export default Item