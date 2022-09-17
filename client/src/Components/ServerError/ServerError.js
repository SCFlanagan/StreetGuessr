import React from "react";
import { Link } from "react-router-dom";
import "./ServerError.css";

function ServerError() {
  return (
    <div className="server-error-page">
      <h1 className="error-code">500</h1>
      <h3 className="error-name">Internal Server Error</h3>
      <h5 className="error-message">
        We're sorry! The server is not responding. Please try again later.
      </h5>
      <Link to="/">
        <button className="button error-page-btn">Go Back</button>
      </Link>
    </div>
  );
}

export default ServerError;
