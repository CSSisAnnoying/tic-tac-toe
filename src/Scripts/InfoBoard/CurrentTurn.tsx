import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store.js";

export function CurrentTurnLabel() {
    const globalState = useSelector((state: RootState) => state);
    const currentTurn = globalState.game.currentTurn;

    return (
        <div className="current-turn-container">
           <span>Current Turn: </span>
           <div>
            <span className={`label o ${currentTurn === "O" ? "current-choice" : ""}`}>O</span>
            <span className={`label x ${currentTurn === "X" ? "current-choice" : ""}`}>X</span>
           </div>
        </div>
    )
}

//${globalState.isPlaying ? "running" : ""}