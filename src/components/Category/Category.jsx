// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ItemList from '../ItemList/ItemList';
// import { getProducts } from '../../Product'; // Importa la función getProducts

// const Category = () => {
//   const { categoryId } = useParams();
//   const [categoryProducts, setCategoryProducts] = useState([]);

//   useEffect(() => {
//     const fetchCategoryProducts = async () => {
//       try {
//         // Llama a la función getProducts para obtener todos los productos
//         const products = await getProducts();
//         // Filtra los productos por la categoría seleccionada
//         const filteredProducts = products.filter(product => product.category.toLowerCase() === categoryId.toLowerCase());
//         setCategoryProducts(filteredProducts);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchCategoryProducts();
//   }, [categoryId]);

//   return (
//     <div>
//       <h2>{categoryId} Products</h2>
//       <ItemList products={categoryProducts} />
//     </div>
//   );
// };

// export default Category;


