import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store.ts";
// import { Shape } from "../Shape";

export function ScoreBoard() {
    const globalState = useSelector((state: RootState) => state.globalState);

    return (
        <div className="score-board">
            <div className="player-names">
                <span>Player1 (X)</span>
                <span>Player2 (O)</span>
            </div>
            <div className="scores">
                <span>{globalState.scoreX}</span>
                <span>{globalState.scoreO}</span>
            </div>
        </div>
    )
}