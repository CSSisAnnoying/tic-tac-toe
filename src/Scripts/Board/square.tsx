import React/*, { useEffect }*/ from 'react';
import { Shape } from '../Shape.tsx';

import { useDispatch, useSelector } from 'react-redux';
import { setCell } from "../../Redux/Slices/BoardSlice.ts";
import { switchCurrentTurn } from "../../Redux/Slices/GameSlice.ts";
import { RootState } from '../../Redux/Store.ts';

const styles = [
    {
        borderTopLeftRadius: "20px",
        boxShadow: "9px 9px 0px 9px #000"
    },
    {
        boxShadow: "4px 9px 0px 9px #000"
    },
    {
        borderTopRightRadius: "20px",
        boxShadow: "-9px 9px 0px 9px #000"
    },
    {
        boxShadow: "9px 4px 0px 9px #000"
    },
    {
        boxShadow: "4px 4px 0px 9px #000"
    },
    {
        boxShadow: "-9px 4px 0px 9px #000"
    },
    {
        borderBottomLeftRadius: "20px",
        boxShadow: "9px -9px 0px 9px #000"
    },
    {
        boxShadow: "4px -9px 0px 9px #000"
    },
    {
        borderBottomRightRadius: "20px",
        boxShadow: "-9px -9px 0px 9px #000"
    }
]

type PropTypes = {
    squareContent: "X" | "O" | null;
    squareNumber: number;
}

export function Square({ squareContent, squareNumber }: PropTypes) {
    const globalState = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCell({ index: squareNumber, value: globalState.game.currentTurn }));
        dispatch(switchCurrentTurn());
    };

        return (
            <button
                className={`square${squareContent ? " " + squareContent : ""}`}
                onClick={handleClick}
                style={styles[squareNumber]}
                disabled={squareContent ? true : false}
            >
                {squareContent !== null && (squareContent === "X" ? <Shape Shape="X" GiveClass={true} /> : <Shape Shape="O" GiveClass={true} />)}
            </button>
        );
    }