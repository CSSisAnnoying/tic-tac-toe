import "./CurrentTurn.css"
import { useGlobalState } from '../GlobalStateContext';

export function CurrentTurnLabel() {
    const { globalState } = useGlobalState();

    return (
        <div className={`current-turn-label ${globalState.isPlaying ? "running" : ""}`}>
           <span>Current Turn: </span>
           <div>
            <span className={`label o ${globalState.currentTurn === "O" ? "current-choice" : ""}`}>O</span>
            <span className={`label x ${globalState.currentTurn === "X" ? "current-choice" : ""}`}>X</span>
           </div>
        </div>
    )
}