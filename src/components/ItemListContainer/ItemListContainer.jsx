import React,{useState, useEffect} from 'react'
import { getProducts } from '../../Product';
import ItemList from '../ItemList/ItemList'
const ItemListContainer = ({greeting}) => {
  const [products, setProducts]= useState([])
  
  useEffect(()=>{
    getProducts()
    .then((res)=>{
      setProducts(res)
    })
    .catch((error)=> console.log(error))
  },[])

  return (
    <div>
      <p>{greeting}</p>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer;