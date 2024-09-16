import React from "react";
import { Square } from "./square.tsx";
import "./Board.css";

import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store.ts";

export function Board() {
    const globalState = useSelector((state: RootState) => state.globalState);    

    return (
        <div className={`board ${!globalState.inMenu ? "running" : ""}`} style={{ pointerEvents: globalState.isPlaying ? "all" : "none" }}>
            {/* {globalState.board.map((row, rowIndex) =>
                row.map((col, colIndex) => (
                    <Square key={`${rowIndex}-${colIndex}`} row={rowIndex} col={colIndex} squareNumber={rowIndex * 3 + colIndex + 1} />
                ))
            )} */}
            {
                globalState.board.map((squareContent, index) => (
                    <Square key={index} squareContent={squareContent} squareNumber={index} />
                ))
            }
        </div>
    );
}