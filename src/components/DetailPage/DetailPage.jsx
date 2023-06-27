import React from 'react'
import product  from "../../Product"
import {Row,Col, ListGroup, Button, ListGroupItem} from 'react-bootstrap'
const DetailPage = ({ match }) => {
    const product = product.find((p) => p.id === match.params.id)
    return (
    
    
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name}/>
                </Col>
                <Col>
                <ListGroupItem>
                    Precio: ${product.price}
                </ListGroupItem>
                <ListGroupItem>
                    {product.description}
                </ListGroupItem>
                </Col>
                <Col></Col>
            </Row>

        
    )
}
export default DetailPage;