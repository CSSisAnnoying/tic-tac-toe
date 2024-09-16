import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isPlaying: false,
    inMenu: true,
    board: Array(9).fill(null),
    currentTurn: "X",
    scoreX: 0,
    scoreO: 0,
    winner: null
};

const globalStateSlice = createSlice({
    name: "globalState",
    initialState,
    reducers: {
        setState: (state, action) => {
            state[action.payload.key] = action.payload.value;
        }
    }
});

export const { setState } = globalStateSlice.actions;
export default globalStateSlice.reducer;