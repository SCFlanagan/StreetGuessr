import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateGameStats } from "../../Reducers/gameStats";
import { updateLocation } from "../../Reducers/location";
import { increaseRoundNum } from "../../Reducers/roundNum";
import { toggleIsGuess } from "../../Reducers/isGuess";
import { resetGuessedLocation } from "../../Reducers/guessedLocation";
import { toggleGameOver } from "../../Reducers/gameOver";
import ResultBtn from "../ResultBtn";
import "./ResultBtns.css";

const ResultBtns = (props) => {
  const startNextRound = () => {
    updateGameStats();
    let nextLocation = props.locationArr[props.roundNum + 1];
    props.updateLocation(nextLocation);
    props.increaseRoundNum();
    props.toggleIsGuess();
    props.resetGuessedLocation();
  };

  const updateGameStats = () => {
    const round = {
      location: props.location.coords,
      guessedLocation: props.guessedLocation,
      distance: props.distance,
      points: props.points,
    };
    props.updateGameStats(round);
  };

  const viewSummary = () => {
    updateGameStats();
    props.toggleGameOver();
  };

  return (
    <div className="result-btn-container">
      {props.roundNum < 4 ? (
        <ResultBtn
          id="next-btn"
          class="button"
          handleClick={startNextRound}
          text="Play Next Round"
        />
      ) : (
        <div>
          {props.gameOver ? (
            <ResultBtn
              class="button end-game-btns"
              handleClick={props.resetGame}
              text="Play Again"
            />
          ) : (
            <ResultBtn
              class="button end-game-btns"
              handleClick={viewSummary}
              text="View Summary"
            />
          )}
          <Link to="/">
            <ResultBtn
              class="end-game-btns main-menu-btn"
              handleClick={props.resetGame}
              text="Main Menu"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  mapType: state.mapType,
  gameOver: state.gameOver,
  locationArr: state.locationArr,
  roundNum: state.roundNum,
  gameStats: state.gameStats,
  location: state.location,
  guessedLocation: state.guessedLocation,
  distance: state.distance,
  points: state.points,
});

const mapDispatchToProps = {
  updateGameStats,
  updateLocation,
  increaseRoundNum,
  toggleIsGuess,
  resetGuessedLocation,
  toggleGameOver,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultBtns);
