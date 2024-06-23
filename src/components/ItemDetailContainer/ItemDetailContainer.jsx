import { useEffect,useState } from "react"
import { pedirItemPorId } from "../../helpers/pedirDatos";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const [error, setError] = useState(null);
  
    useEffect(() => {
        pedirItemPorId(Number(id))
            .then((res) => {
                setItem(res);
                
            })
            .catch((error) => {
                setError(error);
              });
    }, [id]);
    

    return (
    <div>
       {error ? <div>{error.error}</div> : item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer
