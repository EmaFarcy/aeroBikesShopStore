import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ItemDetailBikes ({ bikes }) {
  const { id, image, model, frameset } = bikes;
  
  return (
    <Card className="text-center mt-3 w-25 mx-1 shadow">
      <Card.Img variant="top" src={image} />
      <Card.Header as="h5">{model}</Card.Header>
      <Card.Body>
        <Card.Text>{frameset}</Card.Text>
        <FontAwesomeIcon icon={faStar} />
        <Link
          type="button" to={`/cart/${id}`}
          className="btn btn-info">
          Buy It
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ItemDetailBikes;