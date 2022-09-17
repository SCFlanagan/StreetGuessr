const INCREASE_ROUNDNUM = "INCREASE_ROUNDNUM";
const RESET_ROUNDNUM = "RESET_ROUNDNUM";

export function increaseRoundNum() {
    return {
        type: INCREASE_ROUNDNUM
    };
};

export function resetRoundNum() {
    return {
        type: RESET_ROUNDNUM
    };
};

export const roundNum = (state = 0, action) => {
    switch (action.type) {
        case "INCREASE_ROUNDNUM":
            return state + 1;
        case "RESET_ROUNDNUM":
            return 0;
        default:
            return state;
    }
};