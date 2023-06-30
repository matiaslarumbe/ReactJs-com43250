import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Item from '../Item/Item'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Category = () => {
    const {categoryId} = useParams()

    const ItemList = ({products}) => {
        return (
          <div style={{display:'flex', justifyContent:'space-aroud', alignItems:'center', flexWrap:'wrap'}}>
              {products.map((product)=> <Item key={product.id} product={product}/>)}
          </div>
        )
      }
      let filteredCharacters = product.filter((Item) => {
        return Item.category === categoryId;       
      }
      )
  return (
    
    <div className='div_container'>
    <Card style={{ width: '18rem' }}>
            
    <Card.Img variant="top" src={product.image}/>
      
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
   </div>
  )
}
  
export default Category;