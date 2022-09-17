import React, { useEffect, useState, useCallback } from "react";
import "./Game.css";
import GuessPage from "../GuessPage/GuessPage";
import Results from "../Results/Results";
import { connect } from "react-redux";
import { updateLocation, resetLocation } from "../../Reducers/location";
import {
  updateLocationArr,
  resetLocationArr,
} from "../../Reducers/locationArr";
import { resetGuessedLocation } from "../../Reducers/guessedLocation";
import { resetRoundNum } from "../../Reducers/roundNum";
import { resetDistance } from "../../Reducers/distance";
import { resetPoints } from "../../Reducers/points";
import { resetScore } from "../../Reducers/score";
import { resetGameStats } from "../../Reducers/gameStats";
import { resetGameOver } from "../../Reducers/gameOver";
import { resetIsGuess } from "../../Reducers/isGuess";
import HomeBtn from "../HomeBtn/HomeBtn";
import ServerError from "../ServerError/ServerError";
import Loader from "../Loader/Loader";

const Game = (props) => {
  const [error, setError] = useState("");
  const [showLoader, setShowLoader] = useState(true);

  const getRandomLocation = useCallback(async () => {
    try {
      let res = await fetch(`/api/locations/random/${props.mapType}`);
      if (!res.ok) {
        if (res.status >= 400 && res.status < 500) {
          let data = await res.json();
          let err = { errorMessage: data.message };
          throw err;
        } else {
          let err = { errorMessage: "Server is not responding." };
          throw err;
        }
      }
      let locationArr = await res.json();
      locationArr.forEach((item) => {
        item.coords.lat = parseFloat(item.coords.lat);
        item.coords.lng = parseFloat(item.coords.lng);
      });
      let location = locationArr[props.roundNum];
      props.updateLocationArr(locationArr);
      props.updateLocation(location);
    } catch (e) {
      setError(e.errorMessage);
    }
  }, [props]);

  useEffect(() => {
    if (showLoader) {
      setTimeout(() => {
        setShowLoader(false);
      }, 4000);
    }
    if (Object.keys(props.location).length === 0) {
      getRandomLocation();
    }
  }, [props, getRandomLocation, showLoader]);

  const resetGame = async () => {
    props.resetRoundNum();
    props.resetLocationArr();
    props.resetLocation();
    props.resetGuessedLocation();
    props.resetDistance();
    props.resetPoints();
    props.resetScore();
    props.resetGameStats();
    props.resetGameOver();
    props.resetIsGuess();
  };

  return (
    <div className="game">
      {error && error.length ? (
        <ServerError />
      ) : showLoader ? (
        <Loader />
      ) : (
        <div className="fill-space">
          <HomeBtn resetGame={resetGame} />
          {props.isGuess ? <GuessPage /> : <Results resetGame={resetGame} />}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  mapType: state.mapType,
  roundNum: state.roundNum,
  isGuess: state.isGuess,
  location: state.location,
});

const mapDispatchToProps = {
  updateLocation,
  updateLocationArr,
  resetGuessedLocation,
  resetRoundNum,
  resetLocationArr,
  resetLocation,
  resetDistance,
  resetPoints,
  resetScore,
  resetGameStats,
  resetGameOver,
  resetIsGuess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
