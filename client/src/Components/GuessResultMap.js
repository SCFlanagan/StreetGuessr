import React from 'react';
import { connect } from 'react-redux';
import { GoogleMap, Marker, Polyline } from '@react-google-maps/api';
import locationMarker from '../images/location-marker.png';
import guessMarker from '../images/guess-marker.png';


const GuessResultMap = props => {
    let coordArr = [];
    let displayArr = [];
    let center;
    let zoom;

    const getCenter = latLngInDegr => {
        var LATIDX = 0;
        var LNGIDX = 1;
        var sumX = 0;
        var sumY = 0;
        var sumZ = 0;
        function rad2degr(rad) { return rad * 180 / Math.PI; }
        function degr2rad(degr) { return degr * Math.PI / 180; }

        for (var i = 0; i < latLngInDegr.length; i++) {
            var lat = degr2rad(latLngInDegr[i][LATIDX]);
            var lng = degr2rad(latLngInDegr[i][LNGIDX]);
            sumX += Math.cos(lat) * Math.cos(lng);
            sumY += Math.cos(lat) * Math.sin(lng);
            sumZ += Math.sin(lat);
        }

        var avgX = sumX / latLngInDegr.length;
        var avgY = sumY / latLngInDegr.length;
        var avgZ = sumZ / latLngInDegr.length;

        lng = Math.atan2(avgY, avgX);
        var hyp = Math.sqrt(avgX * avgX + avgY * avgY);
        lat = Math.atan2(avgZ, hyp);

        return { lat: rad2degr(lat), lng: rad2degr(lng) };
    }

    const getZoom = () => {
        const distance = props.distance;
        let zoom = 2;
        switch (true) {
            case (distance >= 3000):
                zoom = 2;
                break;
            case (distance >= 1500):
                zoom = 3;
                break;
            case (distance >= 500):
                zoom = 4;
                break;
            case (distance >= 400):
                zoom = 5;
                break;
            case (distance >= 300):
                zoom = 5;
                break;
            case (distance >= 80):
                zoom = 6;
                break;
            case (distance >= 40):
                zoom = 8;
                break;
            case (distance >= 10):
                zoom = 9;
                break;
            case (distance >= 6):
                zoom = 10;
                break;
            case (distance >= 2):
                zoom = 12;
                break;
            case (distance >= 1):
                zoom = 13;
                break;
            case (distance >= 0):
                zoom = 15;
                break;
            default:
                zoom = 2;
        }
        return zoom;
    }

    if (props.gameOver) {
        displayArr = props.gameStats;
    } else {
        displayArr = [{
            location: props.location.coords,
            guessedLocation: props.guessedLocation
        }];
    }
    if (Object.keys(props.location).length > 0) {
        displayArr.forEach(item => {
            coordArr.push([item.location.lat, item.location.lng], [item.guessedLocation.lat, item.guessedLocation.lng]);
        });
        center = props.gameOver ? { lat: 20, lng: 0 } : getCenter(coordArr);
        zoom = props.gameOver ? 2 : getZoom();
    }
    center = (props.distance > 5000) ? { lat: 20, lng: 0 } : center;


    return (
        <div className="fill-space">
            {
                (Object.keys(props.guessedLocation).length > 0) ?
                    <GoogleMap
                        mapContainerStyle={{ height: "100%", width: "100%" }}
                        center={center}
                        zoom={zoom} >
                        {displayArr.map((round, index) => {
                            return (
                                <div key={`${index}abc`}>
                                    <Marker
                                        key={index}
                                        icon={locationMarker}
                                        position={round.location} />,
                                    <Marker
                                        key={`${index}123`}
                                        icon={guessMarker}
                                        position={round.guessedLocation} />
                                    <Polyline
                                        key={`${index}456`}
                                        path={[
                                            round.location,
                                            round.guessedLocation
                                        ]}
                                        options={{
                                            paths: [
                                                round.location,
                                                round.guessedLocation
                                            ],
                                            zIndex: 18
                                        }} />
                                    );
                                </div>
                            )
                        })}
                    </GoogleMap>
                    : null
            }
        </div>
    );
}

const mapStateToProps = state => ({
    distance: state.distance,
    gameOver: state.gameOver,
    gameStats: state.gameStats,
    location: state.location,
    guessedLocation: state.guessedLocation
});

export default connect(mapStateToProps, null)(GuessResultMap);