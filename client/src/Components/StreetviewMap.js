import React from 'react';
import ReactStreetview from 'react-streetview';
import { connect } from 'react-redux';


const StreetviewMap = props => {
    return (
        <div className="fill-space" >
            {(Object.keys(props.location).length > 0) ?
                <ReactStreetview
                    apiKey={process.env.REACT_APP_STREETVIEW_KEY}
                    streetViewPanoramaOptions={{
                        position: props.location.coords,
                        pov: { heading: 100, pitch: 0 },
                        zoom: 1,
                        addressControl: false,
                        showRoadLabels: false,
                        zoomControl: false
                    }}
                    panControlOptions="none"
                /> : null}
        </div >
    );

}

const mapStateToProps = state => (
    { location: state.location }
)

export default connect(mapStateToProps, null)(StreetviewMap);














/*
class StreetviewMap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const streetviewPanoramaOptions = {
            position: this.props.location.coords,
            pov: { heading: 100, pitch: 0 },
            zoom: 1,
            addressControl: false,
            showRoadLabels: false,
            zoomControl: false
        };

        return (
            <div className="fill-space">
                {(streetviewPanoramaOptions.position !== undefined) ?
                    <ReactStreetview
                        apiKey={process.env.REACT_APP_STREETVIEW_KEY}
                        streetViewPanoramaOptions={streetviewPanoramaOptions}
                        panControlOptions="none"
                    /> : null}
            </div>
        );
    }
}

const mapStateToProps = state => (
    { location: state.location }
)

export default connect(mapStateToProps, null)(StreetviewMap); */