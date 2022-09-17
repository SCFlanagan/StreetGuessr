const UPDATE_DISTANCE = "UPDATE_DISTANCE";
const RESET_DISTANCE = "RESET_DISTANCE";

export function updateDistance(distance) {
    return {
        type: UPDATE_DISTANCE,
        distance
    };
};

export function resetDistance() {
    return {
        type: RESET_DISTANCE
    };
};

export const distance = (state = '', action) => {
    switch (action.type) {
        case "UPDATE_DISTANCE":
            return action.distance;
        case "RESET_DISTANCE":
            return '';
        default:
            return state;
    }
}
