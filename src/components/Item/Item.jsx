import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import {Card} from "react-bootstrap"
import { Link } from 'react-router-dom';
import "./Item.css"


function Item({products}) {
    const {id, model, price, image} = products;

    const cartContext = useContext(CartContext);
    const {cart, setCart}= cartContext;

    return (  
            <Card className="bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="cardTitle">{model}</Card.Title>
                    <Card.Text className="carText">$$ {price}</Card.Text>
                        <Link 
                            type="button" to={`/details/${id}`}
                            className="btn btn-info">Read More
                        </Link>
                </Card.Body>
            </Card>
    ); 
}

export default Item;

