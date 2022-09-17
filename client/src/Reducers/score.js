const UPDATE_SCORE = "UPDATE_SCORE";
const RESET_SCORE = "RESET_SCORE";

export function updateScore(points) {
    return {
        type: UPDATE_SCORE,
        points
    };
};

export function resetScore() {
    return {
        type: RESET_SCORE
    };
};

export const score = (state = 0, action) => {
    switch (action.type) {
        case "UPDATE_SCORE":
            return state + action.points;
        case "RESET_SCORE":
            return 0;
        default:
            return state;
    }
};