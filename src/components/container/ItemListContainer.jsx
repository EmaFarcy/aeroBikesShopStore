import React from "react";
import {useState, useEffect} from "react";
import { gFetch } from "../Helpers/getFetch";
import ItemList from "../ItemList/ItemList";
import { Spinner } from "react-bootstrap";

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
        <ItemList producto={products} />
  );
};

export default ItemListContainer;
       