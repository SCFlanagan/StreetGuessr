import React from "react";
import ResultBtns from "../ResultBtns/ResultBtns";
import { connect } from "react-redux";
import "./GuessResultText.css";

const GuessResultText = (props) => {
  return (
    <div className="result-div">
      <div className="result-content">
        <h2 className="pts-header">{`${props.points} points`}</h2>
        <div className="pts-container">
          <div id="pts-earned"></div>
          <div className="total-pts"></div>
        </div>
        <p className="result-text">
          Your guess was <span className="miles">{props.distance} miles</span>{" "}
          from the correct location.
        </p>
        <ResultBtns resetGame={props.resetGame} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  points: state.points,
  distance: state.distance,
});

export default connect(mapStateToProps, null)(GuessResultText);
