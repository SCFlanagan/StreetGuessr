import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import guessMarker from '../images/guess-marker.png';
import { connect } from 'react-redux';
import { updateGuessedLocation } from '../Reducers/guessedLocation';

const GuessMap = props => {
    let zoom = 1;
    let center = { lat: 20, lng: 0 };
    let marker = null;


    if (Object.keys(props.guessedLocation).length > 0) {
        marker = <Marker
            key={Date.now()}
            position={props.guessedLocation}
            icon={guessMarker} />
        center = props.guessedLocation;
    }

    const handleClickMap = (e) => {
        const guessedLocation = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        };
        props.updateGuessedLocation(guessedLocation);
        document.querySelector('#guess-btn').style.backgroundColor = '#ffa500';
        document.querySelector('#guess-btn').style.opacity = '100%';
    }

    return (
        <div className="guess-container fill-space">
            <GoogleMap
                apiKey={process.env.REACT_APP_MAP_KEY}
                mapContainerStyle={{ height: '100%', width: '100%' }}
                center={center}
                zoom={zoom}
                onClick={handleClickMap} >
                {marker}
            </GoogleMap>
            <div className="overlay"></div>
        </div>
    );
}

const mapStateToProps = state => ({
    location: state.location,
    guessedLocation: state.guessedLocation,
    isGuess: state.isGuess
});

export default connect(mapStateToProps, { updateGuessedLocation })(GuessMap);