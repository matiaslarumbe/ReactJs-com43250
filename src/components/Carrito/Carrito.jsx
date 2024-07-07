import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {
  
  const {carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  }
   
  return (
    <div>
      <h1 className="main-title"> Carrito</h1>
    
    <div className="container">
      
      {
        carrito.map((prod) => (
          <div key={prod.id}>
              <h3>{prod.name}</h3>
              <p>Precio unit: ${prod.price}</p>
              <p>Precio Total: ${prod.price * prod.cantidad}</p>
              <p>Cant:{prod.cantidad} </p>
          </div>
        ))
      }
      {
        carrito.length > 0 ?
        <>
          <h2>Precio Total: ${precioTotal()}</h2>
          <button onClick={handleVaciar}>Vaciar</button>
          <Link to="/checkout" className="finalizar-compra">Finalizar Compra</Link>
        </> :
        <h2>El carrito esta vacio</h2>
      }
      
    </div>
    </div>
  )
}

export default Carrito
