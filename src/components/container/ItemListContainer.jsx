import React from "react";
import {useState, useEffect} from "react";
import { gFetch } from "../Helpers/getFetch";
import ItemList from "../ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts]= useState([]);
    const [loading, setLoading]= useState([true]);
    const { type } = useParams();

    useEffect(() => {
        gFetch
          .then((resp) => {
            setProducts(resp.filter((element)=> element.type===type));
          })
          .catch((rej) => {
            console.log(rej);
          })
          .finally(() => {
            setLoading(false);
          });
      }, [type]);

      return loading ? (
        <div className="text-center mt-4">
          <Spinner animation="border" role="status" variant="info" />
        </div>
      ) : (
        <ItemList producto={products} />
  );
};

export default ItemListContainer;
       