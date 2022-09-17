import React from 'react';
import { connect } from 'react-redux';
import { toggleIsGuess } from '../../Reducers/isGuess';
import { updateDistance } from '../../Reducers/distance';
import { updatePoints } from '../../Reducers/points';
import { updateScore } from '../../Reducers/score';
import './GuessBtn.css';

const GuessBtn = props => {
    const handleGuess = () => {
        if (Object.keys(props.guessedLocation).length === 0) {
            document.querySelector('#info-modal').style.visibility = 'visible';
            return;
        }
        const distance = getDistanceBetween();
        const points = getPoints(distance);
        props.updateDistance(distance);
        props.updatePoints(points);
        props.updateScore(points);
        props.toggleIsGuess();
    }

    const getDistanceBetween = () => {
        const deg2rad = (deg) => {
            return deg * (Math.PI / 180)
        }
        const lat1 = props.location.coords.lat
        const lon1 = props.location.coords.lng
        const lat2 = props.guessedLocation.lat
        const lon2 = props.guessedLocation.lng;
        const R = 3956;
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c;
        return d.toFixed(1);
    }

    const getPoints = (distance) => {
        let points;
        if (props.mapType === 'world') {
            if (distance >= 1250) {
                points = Math.round((-0.5 * distance) + 2500);
            } else {
                points = Math.round((-2.5 * distance) + 5000);
            }
        } else {
            if (distance >= 500) {
                points = Math.round((-1 * distance) + 1000);
            } else {
                points = Math.round((-10 * distance) + 5000);
            }
        }
        points = (points < 0) ? 0 : points;
        return points;
    }

    const buttonText = (Object.keys(props.guessedLocation).length === 0) ? "Place your pin on the map" : "Guess";

    return (
        <button
            id="guess-btn"
            className="button"
            onClick={handleGuess} >
            {buttonText}
        </button >
    )
}

const mapStateToProps = state => ({
    mapType: state.mapType,
    location: state.location,
    guessedLocation: state.guessedLocation,
    distance: state.distance,
    points: state.points,
    score: state.score,
    isGuess: state.isGuess
});

const mapDispatchToProps = {
    toggleIsGuess,
    updateDistance,
    updatePoints,
    updateScore
};

export default connect(mapStateToProps, mapDispatchToProps)(GuessBtn);