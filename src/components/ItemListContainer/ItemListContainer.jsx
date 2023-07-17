import React,{useState, useEffect} from 'react'
import { getProducts } from '../../Product';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


// FIRBASE - FIRESTORE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItemListContainer = () => {
  const [productosData, setProductosData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProductos = async () => {
      const q = query(collection(db, "productos"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setProductosData(docs);
    };
    getProductos();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
     
        <div className="Productos">
          {productosData.map((data) => {
            return (
              <Link
                to={`/producto-detail/${data.id}`}
                style={{ textDecoration: "none" }}
                key={data.id}
              >
                <ItemList name={data} />
              </Link>
            );
          })}
        </div>
      
    </>
  );
};

// const ItemListContainer = ({greeting}) => {
//   const [products, setProducts]= useState([])
//   const {id} = useParams()

//   useEffect(()=>{
//     getProducts()
//     .then((res)=>{
//       if(id){
//         setProducts(res.filter((prod) => prod.category === id))
//       }else{
//         setProducts(res)
//       }
//     })
//     .catch((error)=> console.log(error))
//   },[id])

//   return (
//     <div>
//       <p>{greeting}</p>
//       <ItemList products={products}/>
//     </div>
//   )
// }

export default ItemListContainer;