import React from 'react';
import {Card} from "react-bootstrap"
import {Button} from "react-bootstrap"
import PropTypes from 'prop-types';
import "./Item.css"


function Item({producto}) {
    const {model, price, image} = producto;

    return (  
            <Card className="bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="cardTitle">{model}</Card.Title>
                    <Card.Text className="carText">$$ {price}</Card.Text>
                        <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
    ); 
}

export default Item;

