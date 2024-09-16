import React from 'react';
import './StartMenu.css';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Redux/Store.ts';
import { setState } from '../../Redux/GlobalStateSlice.ts';

export function StartMenu() {
    const globalState = useSelector((state: RootState) => state.globalState);
    const dispatch = useDispatch();

    function onStartClicked() {
        dispatch(setState({ key: "isPlaying", value: true }));
        dispatch(setState({ key: "inMenu", value: false }));
    }

    return (
        <div className={`start-menu ${!globalState.inMenu ? 'running' : ''}`}>
            <h1>Tic-Tac-Toe</h1>
            <div></div>
            <button 
                className="start-button" 
                onClick={globalState.inMenu ? onStartClicked : () => {}}
            >
                <span>Start</span>
            </button>
        </div>
    );
}