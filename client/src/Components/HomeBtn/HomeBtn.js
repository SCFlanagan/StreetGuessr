import React from "react";
import { Link } from "react-router-dom";
import "./HomeBtn.css";

const HomeBtn = (props) => {
  return (
    <div className="logo-container">
      <Link to="/">
        <h3 className="logo" onClick={props.resetGame}>
          StreetGuessr
        </h3>
      </Link>
    </div>
  );
};

export default HomeBtn;
