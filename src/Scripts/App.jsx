import React from 'react';
import './App.css';
import { StartMenu } from './StartMenu/StartMenu.jsx';
import { GlobalStateProvider } from './GlobalStateContext';
import { CurrentTurnLabel } from './InfoBoard/CurrentTurn.jsx';
import { Board } from './Board/board.jsx';
import { WinScreen } from './Win Screen/WinScreen.jsx';

function App() {
  return (
    <GlobalStateProvider>
      <StartMenu />
      <CurrentTurnLabel />
      <Board />
      <WinScreen />
    </GlobalStateProvider>
  );
}

export default App;