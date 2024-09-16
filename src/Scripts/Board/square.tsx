import React/*, { useEffect }*/ from 'react';
import { Shape } from '../Shape.tsx';

// import { useSelector } from 'react-redux';
// import { RootState } from '../../Redux/Store.ts';

let styles = [
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

// const winCombinations = [
//     [0, 1, 2], // Top row
//     [3, 4, 5], // Middle row
//     [6, 7, 8], // Bottom row
//     [0, 3, 6], // Left column
//     [1, 4, 7], // Middle column
//     [2, 5, 8], // Right column
//     [0, 4, 8], // Diagonal top-left to bottom-right
//     [2, 4, 6]  // Diagonal top-right to bottom-left
// ];

// function validateWin(board) {
//     let tie = true;
//     board.forEach((item) => {
//         console.log(board);
//         item.forEach((_item) => {
//             if (item === 0 || _item === 0) {
//                 tie = false;
//             }
//         })
//     })
//     if (tie) {
//         console.log("tie");
//         return "tie";
//     }
//     return null; // No winner and no tie
// }

type PropTypes = {
    squareContent: "X" | "O" | null;
    squareNumber: number;
}

export function Square({ squareContent, squareNumber }: PropTypes) {
    // const globalState = useSelector((state: RootState) => state.globalState);    

    const handleClick = () => {
            
    };


        return (
            <button
                className={`square${squareContent ? " " + squareContent : ""}`}
                onClick={squareContent ? () => {} : handleClick}
                style={styles[squareNumber]}
            >
                {squareContent ? (
                    <>
                        <Shape Shape={"O"} GiveClass={true} />
                        <Shape Shape={"X"} GiveClass={true} />
                    </>
                ) : null}
                {squareContent === "X" ? <Shape Shape="X" GiveClass={true} /> : <Shape Shape="O" GiveClass={true} />}
            </button>
        );
    }