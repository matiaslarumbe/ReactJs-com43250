import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';

const Contact = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

  return (

    <div className="container contact-container">
        <h1 className="main-title">Contacto</h1>
        <form className="formulario" onSubmit={handleSubmit(enviar)}>
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
            
            <button className="btn enviar" type="submit">Enviar</button>

        </form>
    </div>

  )
}

export default Contact