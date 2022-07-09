import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { gFetchProfesional } from "../Helpers/bikes";

import ItemListBikes from "../ItemList/ItemListBikes";

const ItemDetailContainer = () => {
    const [profesional, setProfesional]= useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();

    useEffect(() => {
      gFetchProfesional
      .then((resp) => {
        setProfesional(resp.filter((item) => item.categoria === categoria));  
      })
      .catch((rej) => {
        console.log(rej);
      })
      .finally(() => setLoading(false));
  },);

  return loading ? (
    <div className="text-center mt-4">
      <Spinner animation="border" role="status" variant="info" />
    </div>
  ) : (
    <ItemListBikes profesion={profesional} />
);
};

export default ItemDetailContainer