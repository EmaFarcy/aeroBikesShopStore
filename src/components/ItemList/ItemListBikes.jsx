import React from "react";
import { Container } from "react-bootstrap";
import ItemDetailBikes from "../Item/ItemDetailBikes";

function ItemListBikes({ bikes }) {
    return (
    <Container className="d-flex justify-content-evenly mt-4 flex-wrap w-100">
      {bikes.map((element) => (
        <ItemDetailBikes descriptions={element} key={element.id} />
      ))}
    </Container>
  );
}

export default ItemListBikes;