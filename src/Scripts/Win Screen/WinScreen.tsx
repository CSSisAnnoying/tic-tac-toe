// import React, { useEffect } from 'react';
// import { useGlobalState } from '../GlobalStateContext';

// const returnComponent = (winState) => {
//   if (winState === "tie") {
//     return <h1>la</h1>
//   } else {
//     return <p>bac</p>
//   }
// }

// export function WinScreen() {
//   const { globalState } = useGlobalState();

//   useEffect(() => {
//     if (globalState.winState !== null) {
//       return (returnComponent(globalState.winState))
//     }
//   }, [globalState])
// }