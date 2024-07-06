import React from 'react';
import { ReactComponent as O } from '../Assets/Shapes/O.svg';
import { ReactComponent as X } from '../Assets/Shapes/X.svg';

export function Shape({ Shape, GiveClass }) {
    if (Shape === "O") {
        return GiveClass ? <O className="svg O" /> : <O />;
    } else if (Shape === "X") {
        return GiveClass ? <X className="svg X" /> : <X />;
    } else {
        return null;
    }
}