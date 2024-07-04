import React, { useState, useEffect } from 'react';
// import { getProducts } from '../../Product';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const category = useParams().category

useEffect(() => {
   
    const productosRef = collection(db, "productos")
    
    const q = category ? query(productosRef, where("category", "==", category)) : productosRef;
    
    getDocs(q)
    .then((resp) => {
     setProductos(
      resp.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })

     )
    })

}, [category])

return (
  <div>
    <ItemList productos={productos} titulo={titulo} />
  </div>
  )

}
 

export default ItemListContainer;




// const ItemListContainer = () => {
//   const [productosData, setProductosData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const getProductsData = async () => {
//       try {
//         const products = await getProducts();
//         setProductosData(products);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     getProductsData();
//   }, []);

//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="Productos">
//           <ItemList productos={productosData} />
//         </div>
//       )}
//     </div>
//   );
// };
