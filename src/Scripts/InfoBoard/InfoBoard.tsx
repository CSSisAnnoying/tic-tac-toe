import React from "react";
import { CurrentTurnLabel } from "./CurrentTurn.tsx";
import { ScoreBoard } from "./ScoreBoard.tsx";
import "./InfoBoard.css"

import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store.js";

export function InfoBoard() {
    const gameState = useSelector((state: RootState) => state.game)

    return (
        <div className={`info-board ${!gameState.inMenu ? "running" : ""}`}>
            <CurrentTurnLabel />
            <hr></hr>
            <ScoreBoard />
        </div>
    )
}