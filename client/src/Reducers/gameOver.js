const TOGGLE_GAMEOVER = "TOGGLE_GAMEOVER";
const RESET_GAMEOVER = "RESET_GAMEOVER";

export function toggleGameOver() {
    return {
        type: TOGGLE_GAMEOVER
    };
};

export function resetGameOver() {
    return {
        type: RESET_GAMEOVER
    }
}

export const gameOver = (state = false, action) => {
    switch (action.type) {
        case "TOGGLE_GAMEOVER":
            return !state;
        case "RESET_GAMEOVER":
            return false;
        default:
            return state;
    }
}