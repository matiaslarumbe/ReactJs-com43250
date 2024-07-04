import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const Checkout = () => {

    const {carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido)
    }

  return (
    <div className="container contact-container">
        <h1 className="main-title">Finalizar Compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ingresa nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" {...register("nombre")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Ingresa email</Form.Label>
                <Form.Control type="email" placeholder="nombre@ejemplo.com" {...register("email")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="" placeholder="Telefono"{...register("telefono")} />
            </Form.Group>
            
            <button className="btn enviar" type="submit">Comprar</button>

        </form>
    </div>

  )
}

export default Checkout