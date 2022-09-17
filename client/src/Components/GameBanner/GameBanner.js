import React from 'react';
import { connect } from 'react-redux';
import './GameBanner.css';

const GameBanner = props => {
    const mapType = (props.mapType === 'world') ? 'World' : 'Famous Places';

    return (
        <div>
            <div className="game-banner"></div>
            <div className="banner-text">
                <table className="banner-table">
                    <thead className="fill-space">
                        <tr className="banner-row">
                            <th className="banner-column-1">MAP</th>
                            <th className="banner-column">ROUND</th>
                            <th className="banner-column">SCORE</th>
                        </tr>
                    </thead>
                    <tbody className="fill-space">
                        <tr className="banner-row">
                            <td className="banner-column-1">{mapType}</td>
                            <td className="banner-column">{props.roundNum + 1}/5</td>
                            <td className="banner-column">{props.score}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    mapType: state.mapType,
    roundNum: state.roundNum,
    score: state.score
});

export default connect(mapStateToProps, null)(GameBanner);