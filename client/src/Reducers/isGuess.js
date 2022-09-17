const TOGGLE_ISGUESS = "TOGGLE_ISGUESS";
const RESET_ISGUESS = "RESET_ISGUESS";

export function toggleIsGuess() {
    return {
        type: TOGGLE_ISGUESS
    };
};

export function resetIsGuess() {
    return {
        type: RESET_ISGUESS
    }
}

export const isGuess = (state = true, action) => {
    switch (action.type) {
        case "TOGGLE_ISGUESS":
            return !state;
        case "RESET_ISGUESS":
            return true;
        default:
            return state;
    }
};