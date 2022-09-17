import { combineReducers } from 'redux';
import { mapType } from '../Reducers/mapType';
import { roundNum } from '../Reducers/roundNum';
import { isGuess } from '../Reducers/isGuess';
import { distance } from '../Reducers/distance';
import { gameOver } from '../Reducers/gameOver';
import { gameStats } from '../Reducers/gameStats';
import { location } from '../Reducers/location';
import { guessedLocation } from '../Reducers/guessedLocation';
import { locationArr } from '../Reducers/locationArr';
import { points } from '../Reducers/points';
import { score } from '../Reducers/score';

const rootReducer = combineReducers({
    mapType,
    roundNum,
    isGuess,
    distance,
    gameOver,
    gameStats,
    location,
    guessedLocation,
    locationArr,
    points,
    score
});

export default rootReducer;