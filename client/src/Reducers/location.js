const UPDATE_LOCATION = "UPDATE_LOCATION";
const RESET_LOCATION = "RESET_LOCATION";

export function updateLocation(location) {
    return {
        type: UPDATE_LOCATION,
        location
    };
};

export function resetLocation() {
    return {
        type: RESET_LOCATION
    };
};

export const location = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_LOCATION":
            return action.location;
        case "RESET_LOCATION":
            return {};
        default:
            return state;
    }
};