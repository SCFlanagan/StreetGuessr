const UPDATE_GUESSEDLOCATION = "UPDATE_GUESSEDLOCATION";
const RESET_GUESSEDLOCATION = "RESET_GUESSEDLOCATION";

export function updateGuessedLocation(guessedLocation) {
    return {
        type: UPDATE_GUESSEDLOCATION,
        guessedLocation
    };
};

export function resetGuessedLocation() {
    return {
        type: RESET_GUESSEDLOCATION
    };
};

export const guessedLocation = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_GUESSEDLOCATION":
            return action.guessedLocation;
        case "RESET_GUESSEDLOCATION":
            return {};
        default:
            return state;
    }
};