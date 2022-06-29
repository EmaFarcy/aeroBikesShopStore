import React from 'react';
import {Card} from "react-bootstrap"
import {Button} from "react-bootstrap"

function Item({product}) {
    const {title, model, price, img} = product;

    return (
        <Card className="text-center mt-3 w-25 mx-1 shadow">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Model>{model}</Card.Model>
                <Card.Model>{price}</Card.Model>
                <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
    ); 
}

export default Item;

