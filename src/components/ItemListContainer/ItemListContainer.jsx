import React, { useState, useEffect } from 'react';
// import { getProducts } from '../../Product';
import ItemList from '../ItemList/ItemList';
import { pedirDatos } from '../../helpers/pedirDatos';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const category = useParams().category
  console.log(category)
useEffect(() => {
    pedirDatos()
      .then((res) => {
        if(category){
          setProductos(res.filter((prod) =>prod.category === category) );
          setTitulo(category)
        }else{
          setProductos(res);
          setTitulo("Productos");
        }
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
