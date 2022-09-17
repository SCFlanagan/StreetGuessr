import React from 'react';
import ResultBtns from './ResultBtns/ResultBtns';
import Scoreboard from './Scoreboard/Scoreboard'

const GameSummary = props => {
    return (
        <div className="result-div flex-center">
            <div className="result-content flex-center">
                <Scoreboard />
                <ResultBtns resetGame={props.resetGame}/>
            </div>
        </div>
    )
}

export default GameSummary;