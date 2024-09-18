import React from "react";
import { Square } from "./square.tsx";
import "./Board.css";

import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store.ts";

export function Board() {
    const globalState = useSelector((state: RootState) => state);
    const gameReducers = globalState.game;
    const board = globalState.board.board;

    return (
        <div className={`board ${!gameReducers.inMenu ? "running" : ""}`} style={{ pointerEvents: gameReducers.inMenu ? "all" : "none" }}>
            {/* {globalState.board.map((row, rowIndex) =>
                row.map((col, colIndex) => (
                    <Square key={`${rowIndex}-${colIndex}`} row={rowIndex} col={colIndex} squareNumber={rowIndex * 3 + colIndex + 1} />
                ))
            )} */}
            {
                board.map((squareContent, index) => (
                    <Square key={index} squareContent={squareContent} squareNumber={index} />
                ))
            }
        </div>
    );
}