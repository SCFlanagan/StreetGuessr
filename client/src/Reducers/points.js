const UPDATE_POINTS = "UPDATE_POINTS";
const RESET_POINTS = "RESET_POINTS";

export function updatePoints(points) {
    return {
        type: UPDATE_POINTS,
        points
    };
};

export function resetPoints() {
    return {
        type: RESET_POINTS
    };
};

export const points = (state = 0, action) => {
    switch (action.type) {
        case "UPDATE_POINTS":
            return action.points;
        case "RESET_POINTS":
            return 0;
        default:
            return state;
    }
};