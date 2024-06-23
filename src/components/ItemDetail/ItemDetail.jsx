import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
      cantidad < item.stock && setCantidad(cantidad + 1)
  }

  const handleAgregar = () =>  {
      console.log( {...item,cantidad} )
  }

  return (
    <div className="item-detail">
        <h3>{item.name}</h3>
        <img src={item.image} alt={item.name} />
        <p>{item.description}</p>
        <ItemCount cantidad= {cantidad} handleRestar = {handleRestar} handleSumar = {handleSumar} handleAgregar = {handleAgregar} />
    </div>
  );
};

export default ItemDetail;