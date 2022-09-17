import React, { useEffect } from "react";
import { connect } from "react-redux";
import StreetviewMap from "../StreetviewMap";
import GuessMap from "../GuessMap";
import GuessBtn from "../GuessBtn/GuessBtn";
import InfoModal from "../InfoModal/InfoModal";
import GameBanner from "../GameBanner/GameBanner";
import "./GuessPage.css";

const GuessPage = (props) => {
  useEffect(() => {
    let map = document.querySelector(".guess-map");
    if (map) {
      map.addEventListener("mouseover", () => {
        map.className = "guess-map";
      });
      map.addEventListener("mouseleave", () => {
        map.className = "guess-map mini";
      });
    }
  }, [props.location]);

  return (
    <div className="guess-page relative">
      <StreetviewMap />
      <GameBanner />
      <div className="guess-map">
        <GuessMap />
        <GuessBtn />
      </div>
      <InfoModal />
    </div>
  );
};

const mapStateToProps = (state) => ({
  location: state.location,
});

export default connect(mapStateToProps, null)(GuessPage);
