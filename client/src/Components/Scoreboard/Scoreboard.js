import React from 'react';
import { connect } from 'react-redux';
import('./Scoreboard.css');

const Scoreboard = props => {
    const gameStats = props.gameStats.slice();
    const distanceSum = gameStats.reduce((acc, item) => {
        return acc + Number(item.distance);
    }, 0);

    const addCommaToNumInString = str => {
        let withoutSpaces = str.split(' ');
        withoutSpaces.forEach((item, index) => {
            if (!isNaN(item)) {
                let withoutDecimals = item.split('.');
                withoutDecimals[0] = withoutDecimals[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                withoutSpaces[index] = withoutDecimals.join('.');
            }
        });
        return withoutSpaces.join(' ')
    }

    return (
        <table className="scoreboard">
            <thead>
                <tr>
                    <th>Round 1</th>
                    <th>Round 2</th>
                    <th>Round 3</th>
                    <th>Round 4</th>
                    <th>Round 5</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr className="pts-row">
                    <td>{addCommaToNumInString(`${props.gameStats[0].points} pts`)}</td>
                    <td>{addCommaToNumInString(`${props.gameStats[1].points} pts`)}</td>
                    <td>{addCommaToNumInString(`${props.gameStats[2].points} pts`)}</td>
                    <td>{addCommaToNumInString(`${props.gameStats[3].points} pts`)}</td>
                    <td>{addCommaToNumInString(`${props.gameStats[4].points} pts`)}</td>
                    <td>{addCommaToNumInString(`${props.score} pts`)}</td>
                </tr>
                <tr className="distance-row">
                    <td>{addCommaToNumInString(`${props.gameStats[0].distance} mi`)}</td>
                    <td>{addCommaToNumInString(`${props.gameStats[1].distance} mi`)} pts</td>
                    <td>{addCommaToNumInString(`${props.gameStats[2].distance} mi`)} pts</td>
                    <td>{addCommaToNumInString(`${props.gameStats[3].distance} mi`)} pts</td>
                    <td>{addCommaToNumInString(`${props.gameStats[4].distance} mi`)} pts</td>
                    <td>{distanceSum.toFixed(1)} mi</td>
                </tr>
            </tbody>
        </table>
    )

}

const mapStateToProps = state => ({
    gameStats: state.gameStats,
    score: state.score
});

export default connect(mapStateToProps, null)(Scoreboard);