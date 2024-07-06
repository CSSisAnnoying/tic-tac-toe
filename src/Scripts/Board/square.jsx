import { useGlobalState } from '../GlobalStateContext';
import { useState } from 'react';
import { Shape } from '../Shape';

let styles = {
    1: {
        borderTopLeftRadius: "20px",
        boxShadow: "9px 9px 0px 9px #000"
    },
    2: {
        boxShadow: "4px 9px 0px 9px #000"
    },
    3: {
        borderTopRightRadius: "20px",
        boxShadow: "-9px 9px 0px 9px #000"
    },
    4: {
        boxShadow: "9px 4px 0px 9px #000"
    },
    5: {
        boxShadow: "4px 4px 0px 9px #000"
    },
    6: {
        boxShadow: "-9px 4px 0px 9px #000"
    },
    7: {
        borderBottomLeftRadius: "20px",
        boxShadow: "9px -9px 0px 9px #000"
    },
    8: {
        boxShadow: "4px -9px 0px 9px #000"
    },
    9: {
        borderBottomRightRadius: "20px",
        boxShadow: "-9px -9px 0px 9px #000"
    }
}

export function Square({ squareNumber }) {
    const [currentSquare, setSquare] = useState(null);
    const { globalState, setState } = useGlobalState();

    const handleClick = () => {
        if (!currentSquare) { // Check if square is already set
            setSquare(globalState.currentTurn); // Set current turn in square
            setState('board', {
                ...globalState.board,
                [squareNumber]: globalState.currentTurn
            });
            globalState.currentTurn === "X" ? setState("currentTurn", "O") : setState("currentTurn", "X")
        }
    };
    return (
        <button className={`square ${currentSquare !== null ? currentSquare : ""}`} onClick={handleClick} disabled={currentSquare !== null} style={styles[squareNumber]}>
            <Shape Shape={"O"} GiveClass={true} />
            <Shape Shape={"X"} GiveClass={true} />
            {/* <span>{currentSquare}</span> */}
        </button>
    );
}