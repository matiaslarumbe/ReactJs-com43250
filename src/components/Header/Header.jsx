import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./header.css"
import { Link } from "react-router-dom";


// imagenes de las card
import Almendras from '../../assets/img/Products/almendras1.jpg'
import Castañas from '../../assets/img/Products/castañas-de-caju2.jpg'
import FrutasDesecadas from '../../assets/img/Products/frutas-desecadas14.jpg'
import ManiconCascara from '../../assets/img/Products/mani-con-cascara4.jpg'
import ManisinCascara from '../../assets/img/Products/mani-sin-cascara5.jpg'
import MixdeSemillas from '../../assets/img/Products/mix-de-semillas11.jpeg'
import MixSalado from '../../assets/img/Products/mix-salado12.jpeg'
import MixTropical from '../../assets/img/Products/mix-tropical13.jpg'
import Nueces from '../../assets/img/Products/nueces3.jpg'
import PasasdeUva from '../../assets/img/Products/pasas-de-uvas15.jpg'
import PasasdeUvaRubia from '../../assets/img/Products/pasas-de-uvas-rubias16.jpg'
import Pistachos from '../../assets/img/Products/pistachos6.jpg'
import Avellanas from '../../assets/img/Products/avellanas7.jpg'
import MixFrutosSecos from '../../assets/img/Products/mix-frutos-secos10.jpg'
import Granola from '../../assets/img/Products/granola8.jpg'
import Avena from '../../assets/img/Products/avena9.jpg'





// Header (Estructura del header de la pagina)
const Header = () => {
   
  return (
        <div className ="card_container" > 
             
            <Card style={{ width: '18rem' }}>
            
             <Card.Img variant="top" src= {Almendras} />
               
                <Card.Body>
                    
                    <Card.Title>Card Title 1</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> 
                    
                    <div className ="button-container"> 
                    
                        <Button variant="primary" >Ver Producto</Button>
                 
                     <Button variant="primary">Comprar!</Button>
                     
                    </div> 
                </Card.Body>
              
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src = {Castañas} />
                <Card.Body>
                    <Card.Title>Card Title 2</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                     <div className ="button-container"> 
                     <Button variant="primary">Ver Producto</Button>
                     <Button variant="primary">Comprar!</Button>
                    </div> 
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {Nueces} />
                <Card.Body>
                    <Card.Title>Card Title 4</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                     <div className ="button-container"> 
                     <Button variant="primary">Ver Producto</Button>
                     <Button variant="primary">Comprar!</Button>
                    </div> 
                </Card.Body>
            </Card>
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {ManiconCascara} />
                <Card.Body>
                    <Card.Title>Card Title 4</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                     <div className ="button-container"> 
                     <Button variant="primary">Ver Producto</Button>
                     <Button variant="primary">Comprar!</Button>
                    </div> 
                </Card.Body>
            </Card>
            <Card   style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {ManisinCascara} id="1" />
                <Card.Body>
                    <Card.Title>Card Title 4</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                     <div className ="button-container"> 
                     <Button variant="primary">Ver Producto</Button>
                     <Button variant="primary">Comprar!</Button>
                    </div> 
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {Pistachos} />
                <Card.Body>
                    <Card.Title>Card Title 4</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                     <div className ="button-container"> 
                     <Button variant="primary">Ver Producto</Button>
                     <Button variant="primary">Comprar!</Button>
                    </div> 
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {Avellanas} />
                <Card.Body>
                    <Card.Title>Card Title 4</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                     <div className ="button-container"> 
                     <Button variant="primary">Ver Producto</Button>
                     <Button variant="primary">Comprar!</Button>
                    </div> 
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {Granola} style={{ height: '12rem' }} />
                <Card.Body>
                    <Card.Title>Card Title 4</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                     <div className ="button-container"> 
                     <Button variant="primary">Ver Producto</Button>
                     <Button variant="primary">Comprar!</Button>
                    </div> 
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {Avena} style={{ height: '12rem' }} />
                <Card.Body>
                    <Card.Title>Card Title 4</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                     <div className ="button-container"> 
                     <Button variant="primary">Ver Producto</Button>
                     <Button variant="primary">Comprar!</Button>
                    </div> 
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {MixFrutosSecos} style={{ height: '12rem'}} />
                <Card.Body>
                    <Card.Title>Card Title 4</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                     <div className ="button-container"> 
                     <Button variant="primary">Ver Producto</Button>
                     <Button variant="primary">Comprar!</Button>
                    </div> 
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {MixdeSemillas} style={{ height: '13rem'}} />
                <Card.Body>
                    <Card.Title>Card Title 4</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                     <div className ="button-container"> 
                     <Button variant="primary">Ver Producto</Button>
                     <Button variant="primary">Comprar!</Button>
                    </div> 
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src= {MixSalado} style={{ height: '13rem'}}/>
                <Card.Body>
                    <Card.Title>Card Title 4</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                     <div className ="button-container"> 
                     <Button variant="primary">Ver Producto</Button>
                     <Button variant="primary">Comprar!</Button>
                    </div> 
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src= {MixTropical} style={{ height: '13rem'}} />
                <Card.Body>
                    <Card.Title>Card Title 4</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                     <div className ="button-container"> 
                     <Button variant="primary">Ver Producto</Button>
                     <Button variant="primary">Comprar!</Button>
                    </div> 
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {FrutasDesecadas} />
                <Card.Body>
                    <Card.Title>Card Title 3</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                     <div className ="button-container"> 
                     <Button variant="primary">Ver Producto</Button>
                     <Button variant="primary">Comprar!</Button>
                    </div> 
                </Card.Body>
            </Card>
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {PasasdeUva} style={{ height: '12rem'}}/>
                <Card.Body>
                    <Card.Title>Card Title 4</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                     <div className ="button-container"> 
                     <Button variant="primary">Ver Producto</Button>
                     <Button variant="primary">Comprar!</Button>
                    </div> 
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {PasasdeUvaRubia} style={{ height: '12rem'}} />
                <Card.Body>
                    <Card.Title>Card Title 4</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                     <div className ="button-container"> 
                     <Button variant="primary">Ver Producto</Button>
                     <Button variant="primary">Comprar!</Button>
                    </div> 
                </Card.Body>
         
            </Card>
     
            
        </div>
    
  );
};

export default Header;
