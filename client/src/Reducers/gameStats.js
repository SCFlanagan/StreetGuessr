const UPDATE_GAMESTATS = "UPDATE_GAMESTATS";
const RESET_GAMESTATS = "RESET_GAMESTATS";

export function updateGameStats(round) {
    return {
        type: UPDATE_GAMESTATS,
        round
    };
};

export function resetGameStats() {
    return {
        type: RESET_GAMESTATS
    };
};

export const gameStats = (state = [], action) => {
    let newState = [...state];
    switch (action.type) {
        case "UPDATE_GAMESTATS":
            newState.push(action.round);
            return newState;
        case "RESET_GAMESTATS":
            return [];
        default:
            return state;
    }
};