import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="d-flex flex-column text-center d-flex justify-content-center"
      style={{ marginTop: "240px" }}
    >
      <h3 className="mb-3">Oops Wrong direction</h3>

      <div>
        <Link to="/" className="btn btn-dark">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
