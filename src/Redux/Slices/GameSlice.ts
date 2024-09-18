import { createSlice } from "@reduxjs/toolkit";

type GameType = {
    isPlaying: boolean;
    inMenu: boolean;
    currentTurn: "X" | "O";
    winner: "X" | "O" | null;
}

const initialState: GameType = {
    isPlaying: false,
    inMenu: true,
    currentTurn: "X",
    winner: null
}

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload;
        },
        setInMenu: (state, action) => {
            state.inMenu = action.payload;
        },
        setCurrentTurn: (state, action) => {
            state.currentTurn = action.payload;
        },
        switchCurrentTurn: (state) => {
            state.currentTurn = state.currentTurn === "X" ? "O" : "X";
        },
        setWinner: (state, action) => {
            state.winner = action.payload;
        }
    }
})

export const { setIsPlaying, setInMenu, setCurrentTurn, switchCurrentTurn, setWinner } = gameSlice.actions;
export default gameSlice.reducer;