import React,{useState, useEffect} from 'react'
import { getProducts } from '../../Product';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
  const [products, setProducts]= useState([])
  const {id} = useParams()

  useEffect(()=>{
    getProducts()
    .then((res)=>{
      if(id){
        setProducts(res.filter((prod) => prod.category === id))
      }else{
        setProducts(res)
      }
    })
    .catch((error)=> console.log(error))
  },[id])

  return (
    <div>
      <p>{greeting}</p>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer;