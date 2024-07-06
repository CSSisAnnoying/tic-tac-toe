import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context
const GlobalStateContext = createContext();

// Create a provider component
export const GlobalStateProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({
        isPlaying: false,
        board: {},
        currentTurn: "X"
    });

    const setState = (stateName, value) => {
        // Using functional update to ensure state is correctly updated
        setGlobalState(prevState => ({
            ...prevState,
            [stateName]: value
        }));
    };

    useEffect(() => {
        console.log(globalState)
    })

    return (
        <GlobalStateContext.Provider value={{ globalState, setState }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

// Custom hook to use the global state
export const useGlobalState = () => useContext(GlobalStateContext);