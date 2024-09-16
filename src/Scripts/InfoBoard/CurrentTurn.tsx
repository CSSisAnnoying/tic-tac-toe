import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store.js";

export function CurrentTurnLabel() {
    const globalState = useSelector((state: RootState) => state.globalState);

    return (
        <div className="current-turn-container">
           <span>Current Turn: </span>
           <div>
            <span className={`label o ${globalState.currentTurn === "O" ? "current-choice" : ""}`}>O</span>
            <span className={`label x ${globalState.currentTurn === "X" ? "current-choice" : ""}`}>X</span>
           </div>
        </div>
    )
}

//${globalState.isPlaying ? "running" : ""}