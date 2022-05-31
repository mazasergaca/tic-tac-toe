import React, { useState } from 'react';
import RoutesComponent from './components/Routes/Routes';
import { CoinsContext } from './context/CoinsContext';
import { Global } from './styles/global';

const App = () => {
  const [coins, setCoins] = useState(
    Number(localStorage.getItem('coins')) || 0
  );
  return (
    <CoinsContext.Provider value={{ coins, setCoins }}>
      <Global />
      <RoutesComponent />
    </CoinsContext.Provider>
  );
};

export default App;
