import { createContext, useContext } from 'react';

type SkinType = {
  fontFamily: string;
  color?: string;
  fontSize?: number;
};

type ThemeSkinType = {
  skin: SkinType;
  setSkin: (c: SkinType) => void;
};

export const ThemeSkinContext = createContext<ThemeSkinType>({
  skin: {
    fontFamily: 'Secular One',
  },
  setSkin: () => {},
});

export const useThemeSkinContext = () => useContext(ThemeSkinContext);
