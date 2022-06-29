import React from "react";
import {useState, useEffect} from "react";
import { gFetch } from "../Helpers/getFetch";
import Item from "../Item/Item";
import { Container, Spinner } from "react-bootstrap";

const ItemListContainer = () => {
    const [products, setProducts]= useState([]);
    const [loading, setLoading]= useState([true]);

    useEffect(() => {
        gFetch
          .then((resp) => {
            setProducts(resp);
          })
          .catch((rej) => {
            console.log(rej);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);

      return loading ? (
        <div className="text-center mt-4">
          <Spinner animation="border" role="status" variant="info" />
        </div>
      ) : (
        <Container className="d-flex justify-content-evenly mt-4 flex-wrap w-100">
          {products.map((product) => (
            <Item producto={product} key={product.id} />
          ))}
        </Container>
      );
    };

export default ItemListContainer;