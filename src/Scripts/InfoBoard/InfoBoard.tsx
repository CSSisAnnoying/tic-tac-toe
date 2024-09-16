import React from "react";
import { CurrentTurnLabel } from "./CurrentTurn.tsx";
import { ScoreBoard } from "./ScoreBoard.tsx";
import "./InfoBoard.css"

import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store.js";

export function InfoBoard() {
    const globalState = useSelector((state: RootState) => state.globalState)

    return (
        <div className={`info-board ${!globalState.inMenu ? "running" : ""}`}>
            <CurrentTurnLabel />
            <hr></hr>
            <ScoreBoard />
        </div>
    )
}