import React, { useEffect } from "react";
import { connect } from "react-redux";
import GuessResultMap from "../GuessResultMap";
import GuessResultText from "../GuessResultText/GuessResultText";
import GameSummary from "../GameSummary";
import "./Results.css";

const Results = (props) => {
  useEffect(() => {
    const widthOfPts = Math.round((props.points * 60) / 5000);
    document.getElementById("pts-earned").style.width = `${widthOfPts}%`;
  }, [props.points]);

  return (
    <div className="fill-space">
      <div className="guess-result-map">
        <GuessResultMap />
      </div>
      {props.gameOver ? (
        <GameSummary resetGame={props.resetGame} />
      ) : (
        <GuessResultText resetGame={props.resetGame} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  points: state.points,
  gameOver: state.gameOver,
});

export default connect(mapStateToProps, null)(Results);
