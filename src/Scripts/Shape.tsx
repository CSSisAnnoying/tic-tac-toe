import React from 'react';
import { ReactComponent as O } from '../Assets/Shapes/O.svg';
import { ReactComponent as X } from '../Assets/Shapes/X.svg';

type PropTypes = {
    Shape: string;
    GiveClass: boolean;
}

export function Shape({ Shape, GiveClass }: PropTypes) {
    if (Shape === "O") {
        return <O className={GiveClass ? "svg " + Shape : ""} />;
    } else if (Shape === "X") {
        return <X className={GiveClass ? "svg " + Shape : ""} />;
    } else {
        return null;
    }
}