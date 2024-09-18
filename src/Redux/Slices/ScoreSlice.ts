import { createSlice } from "@reduxjs/toolkit";

type ScoreType = {
    scoreX: number;
    scoreO: number;
}

const initialState: ScoreType = {
    scoreX: 0,
    scoreO: 0,
}

const scoreSlice = createSlice({
    name: "score",
    initialState,
    reducers: {
        setScoreOfX(state, action) {
            state.scoreX = action.payload;
        },
        setScoreOfO(state, action) {
            state.scoreO = action.payload;
        },
        incrementX(state) {
            state.scoreX++;
        },
        incrementO(state) {
            state.scoreO++;
        },
        resetScores(state) {
            state.scoreX = 0;
            state.scoreO = 0;
        }
    }
})

export const { setScoreOfX, setScoreOfO, incrementX, incrementO, resetScores } = scoreSlice.actions;
export default scoreSlice.reducer;