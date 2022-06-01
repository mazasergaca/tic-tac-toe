import React, { useState } from 'react';
import RoutesComponent from './components/Routes/Routes';
import { CoinsContext } from './context/CoinsContext';
import { ThemeSkinContext } from './context/ThemeSkinContext';
import { Global } from './styles/global';

const App = () => {
  const themeSkinLocalStorage = localStorage.getItem('theme-skin');
  const initialSkin = themeSkinLocalStorage
    ? JSON.parse(themeSkinLocalStorage)
    : {
        fontFamily: 'Secular One',
      };

  const [skin, setSkin] = useState(initialSkin);
  const [coins, setCoins] = useState(
    Number(localStorage.getItem('coins')) || 0
  );
  return (
    <ThemeSkinContext.Provider value={{ skin, setSkin }}>
      <CoinsContext.Provider value={{ coins, setCoins }}>
        <Global />
        <RoutesComponent />
      </CoinsContext.Provider>
    </ThemeSkinContext.Provider>
  );
};

export default App;
