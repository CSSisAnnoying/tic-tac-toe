import { createSlice } from "@reduxjs/toolkit";

type BoardType = {
    board: Array<"X" | "O" | null>;
}

const initialState: BoardType = {
    board: Array(9).fill(null),
}

const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        setEntireBoard(state, action) {
            state.board = action.payload;
        },
        setCell(state, action) {
            state.board[action.payload.index] = action.payload.value;
        },
        resetBoard(state) {
            state.board = Array(9).fill(null);
        }
    }
})

export const { setEntireBoard, setCell, resetBoard } = boardSlice.actions;
export default boardSlice.reducer;