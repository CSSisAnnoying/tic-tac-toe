import React from 'react';
import { ReactComponent as O } from '../Assets/Shapes/O.svg';
import { ReactComponent as X } from '../Assets/Shapes/X.svg';

import { useSelector } from 'react-redux';
import { RootState } from '../Redux/Store.ts';

type PropTypes = {
    Shape: string;
    GiveClass: boolean;
}

export function Shape({ Shape, GiveClass }: PropTypes) {
    const globalState = useSelector((state: RootState) => state.globalState);

    if (Shape === "O") {
        return GiveClass === true ? <O className={`svg O ${globalState.currentTurn === "O" ? "current-turn" : ""}`} /> : <O className="svg" />;
    } else if (Shape === "X") {
        return GiveClass === true ? <X className={`svg X ${globalState.currentTurn === "X" ? "current-turn" : ""}`} /> : <X className="svg" />;
    } else {
        return null;
    }
}