import React from 'react';
import { useGlobalState } from '../GlobalStateContext';
import './StartMenu.css';

export function StartMenu() {
    const { globalState, setState } = useGlobalState();

    function clickHandler() {
        setState("isPlaying", true)
    }

    return (
        <div className={`start-menu ${globalState.isPlaying ? 'running' : ''}`}>
            <h1>Tic-Tac-Toe</h1>
            <div alt=""></div>
            <button 
                className="start-button" 
                onClick={() => {clickHandler()}}
                disabled={globalState.isPlaying}
            >
                <span>Start</span>
            </button>
        </div>
    );
}