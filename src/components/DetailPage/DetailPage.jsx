import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../Product';
import ItemDetail from '../ItemDetail/ItemDetail';

const DetailPage = () => {
    const [product, setProduct]= useState({})

    const {id} = useParams()

    useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setProduct(res))
        .catch(error=> console.log(error))
    },[id])
   
    return (
    <div>
        <ItemDetail product={product}/>
    </div>
    )
}
export default DetailPage;