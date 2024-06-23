import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({ producto }) => {
  return (
    <div className='div_container'>
      <Card style={{ width: '18rem' }}>
        {producto && (
          <>
            <Card.Img className="card-img-top" variant="top" src={producto.image} />
            <Card.Body>
              <Card.Title>{producto.name}</Card.Title>
              <Card.Text>{producto.description}</Card.Text>
              <div className="button-container">
                <Button as={Link} to={`/item/${producto.id}`} variant="primary">Ver Producto</Button>
              </div>
            </Card.Body>
          </>
        )}
      </Card>
    </div>
  );
};

export default Item;