import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { gFetchBikesEntry } from "../Helpers/bikesEntry";


function OpenProfessional() {
    const [profesional, setProfesional] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
      gFetchBikesEntry
        .then((resp) =>
          setProfesional(resp.find((item) => item.id === Number(id)))
        )
        .catch((rej) => console.log(rej))
        .finally(() => setLoading(false));
    }, [id]);

    const {
        type,
    } = profesional;

    return loading ? (
        <div className="text-center mt-4">
      <Spinner animation="border" role="status" variant="info" />
    </div>
  ) : (
    <div className="container">
      <div className="row mt-4 border rounded-1 shadow w-100">
        <div className="col-md-6 text-center">
        </div>
        <div className="col-md-6 p-4">
          <div className="d-flex justify-content-between">
          </div>
    
          <p>{type}</p>
          <div className="text-end">
          </div>
          <div className="text-end">
            <Link
              type="button" to={`/details/${id}`}
              className="btn btn-info">
              Go!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenProfessional;   