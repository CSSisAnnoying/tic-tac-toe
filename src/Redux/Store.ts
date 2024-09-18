import { configureStore } from "@reduxjs/toolkit";

import boardReducer from "./Slices/BoardSlice.ts";
import gameReducer from "./Slices/GameSlice.ts";
import scoreReducer from "./Slices/ScoreSlice.ts";

const store = configureStore({
    reducer: {
        board: boardReducer,
        game: gameReducer,
        score: scoreReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;