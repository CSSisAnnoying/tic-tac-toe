import { Square } from "./square.jsx";
import "./Board.css";
import { useGlobalState } from '../GlobalStateContext';

export function Board() {
    const { globalState } = useGlobalState();

    return (
        <div className={`board ${globalState.isPlaying === true ? "running" : ""}`} style={{pointerEvents: globalState.isPlaying ? "all" : "none"}}>
            <Square squareNumber={1} />
            <Square squareNumber={2} />
            <Square squareNumber={3} />
            <Square squareNumber={4} />
            <Square squareNumber={5} />
            <Square squareNumber={6} />
            <Square squareNumber={7} />
            <Square squareNumber={8} />
            <Square squareNumber={9} />
        </div>
    )
}