import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

export const CartWidget = () => {
  
  const {cantidadEnCarrito} = useContext(CartContext)

  return (
    <div>
          <Link className ="bi bi-cart2" to="/carrito">
           {cantidadEnCarrito()}
          </Link>
    </div>
  )
}
export default CartWidget