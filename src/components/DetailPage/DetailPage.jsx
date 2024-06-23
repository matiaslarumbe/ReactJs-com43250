import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getProducts } from '../../Product'; 
import ItemDetail from '../ItemDetail/ItemDetail';

const DetailPage = () => {
    const [productos, setProductos]= useState({})

    const {id} = useParams()

    useEffect(()=>{
        getProducts() // Llamar a la función getProducts
        .then((res) => {
            const product = res.find(item => item.id === id); // Encontrar el producto por su id
            setProductos(product);
        })
        .catch(error=> console.log(error))
    }, [id])
   
    return (
    <div>
        <ItemDetail productos={productos}/>
    </div>
    )
}
export default DetailPage;
