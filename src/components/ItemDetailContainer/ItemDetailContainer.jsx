import { useEffect,useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig";

const ItemDetailContainer = () => {
  
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const [error, setError] = useState(null);
  
    useEffect(() => {
       
      const docRef = doc(db, "productos", id)
      
      getDoc(docRef)
        .then((resp) => {
          setItem(
            { ...resp.data(), id: resp.id}
          )
        } 
      )

    }, [id]);
    

    return (
    <div>
       {error ? <div>{error.error}</div> : item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer
