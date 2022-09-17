import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setMapType } from "../../Reducers/mapType";
import "./LandingPage.css";

const LandingPage = (props) => {
  const handleClick = (e) => {
    const mapType = e.target.innerText === "WORLD" ? "world" : "famousplaces";
    props.setMapType(mapType);
  };

  return (
    <div className="landing-page flex-center">
      <h1 className="title">StreetGuessr</h1>
      <div className="landing-btn-container">
        <Link to="/famousplaces">
          <button className="button landing-btn" onClick={handleClick}>
            Famous Places
          </button>
        </Link>
        <Link to="/world">
          <button className="button landing-btn" onClick={handleClick}>
            World
          </button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mapType: state.mapType,
});

const mapDispatchToProps = {
  setMapType,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
