const SET_MAPTYPE = "SET_MAPTYPE";

export function setMapType(mapType) {
    return {
        type: SET_MAPTYPE,
        mapType
    };
};

export const mapType = (state = '', action) => {
    switch (action.type) {
        case "SET_MAPTYPE":
            return action.mapType;
        default:
            return state;
    }
};