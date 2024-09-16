import React from 'react';
import './App.css';
import { StartMenu } from './StartMenu/StartMenu.tsx';
import { InfoBoard } from './InfoBoard/InfoBoard.tsx';
import { Board } from './Board/board.tsx';
// import { WinScreen } from './Win Screen/WinScreen.tsx';

import { Provider } from 'react-redux';
import store from '../Redux/Store.ts';

function App() {
  return (
    <Provider store={store}>
      <StartMenu />
      <InfoBoard />
      <Board />
      {/* <WinScreen /> */}
    </Provider>
  )
}

export default App;