import { createContext, useContext } from 'react';

type CoinsType = {
  coins: number;
  setCoins: (c: number) => void;
};

export const CoinsContext = createContext<CoinsType>({
  coins: 0,
  setCoins: () => {},
});

export const useCoinsContext = () => useContext(CoinsContext);
