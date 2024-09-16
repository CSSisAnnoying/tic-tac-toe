import { configureStore } from "@reduxjs/toolkit";
import globalStateReducer from "./GlobalStateSlice.ts";

const store = configureStore({
    reducer: {
        globalState: globalStateReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;