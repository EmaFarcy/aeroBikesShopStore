import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { gFetchProfesional } from "../Helpers/bikes";
import './professional.css';

function Professional() {
    const [profesional, setProfesional] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
      gFetchProfesional
        .then((resp) =>
          setProfesional(resp.find((item) => item.id === Number(id)))
        )
        .catch((rej) => console.log(rej))
        .finally(() => setLoading(false));
    }, [id]);

    const {
        model,
        frameset,
        image,
    } = profesional;

    return loading ? (
        <div className="text-center mt-4">
      <Spinner animation="border" role="status" variant="info" />
    </div>
  ) : (
    <div className="container">
      <div className="row mt-4 border rounded-1 shadow w-100">
        <div className="col-md-6 text-center">
          <img src={image} alt="" className="w-100 p-4 rounded-5" />
        </div>
        <div className="col-md-6 p-4">
          <div className="d-flex justify-content-between">
            <h3>{model}</h3>
          </div>
          <p>
            {" "}
          </p>
          <p>{frameset}</p>
          <p>{}</p>
          <div className="text-end">
          </div>
          <div className="text-end">
            <Link
              type="button" to="/cart"
              className="btn btn-info">
              Buy It
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professional;   