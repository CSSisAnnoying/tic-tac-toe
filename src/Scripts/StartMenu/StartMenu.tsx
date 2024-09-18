import React from 'react';
import './StartMenu.css';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Redux/Store.ts';
import { setIsPlaying, setInMenu } from "../../Redux/Slices/GameSlice.ts";

export function StartMenu() {
    const globalState = useSelector((state: RootState) => state);
    const dispatch = useDispatch();
    const inMenu = globalState.game.inMenu;

    function onStartClicked() {
        dispatch(setIsPlaying(true));
        dispatch(setInMenu(false));
    }

    return (
        <div className={`start-menu ${!inMenu ? 'running' : ''}`}>
            <h1>Tic-Tac-Toe</h1>
            <div></div>
            <button 
                className="start-button" 
                onClick={inMenu ? onStartClicked : () => {}}
            >
                <span>Start</span>
            </button>
        </div>
    );
}