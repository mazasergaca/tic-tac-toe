import React, { FC, useState } from 'react';
import { useThemeSkinContext } from 'src/context/ThemeSkinContext';
import { skins } from 'src/utils/skins';
import { colors } from 'src/utils/colors';
import {
  Item,
  WrapperSkins,
  SkinStyled,
  Button,
  ListColors,
  ItemColor,
  ButtonColor,
} from './Skin.styles';

interface SkinI {
  style: {
    fontFamily: string;
    fontSize: number;
  };
  index: number;
}

const Skin: FC<SkinI> = ({ style, index }) => {
  const [colorSkin, setColorSkin] = useState(
    localStorage.getItem(`skin-color-${index}`) || colors[0]
  );

  const { skin, setSkin } = useThemeSkinContext();

  const handleClick = () => {
    const newTheme = { ...style, color: colorSkin };
    setSkin(newTheme);
    localStorage.setItem('theme-skin', JSON.stringify(newTheme));
    localStorage.setItem(`skin-color-${index}`, colorSkin);
  };

  const changeColorSkin = (c: string): void => {
    setColorSkin(c);
  };

  return (
    <Item>
      <WrapperSkins>
        <SkinStyled style={{ ...style, color: colorSkin }}>X</SkinStyled>
        <SkinStyled style={{ ...style, color: colorSkin }}>O</SkinStyled>
      </WrapperSkins>
      <ListColors>
        {colors.map(color => (
          <ItemColor key={color}>
            <ButtonColor
              onClick={() => changeColorSkin(color)}
              disabled={color === colorSkin}
              color={color}
            ></ButtonColor>
          </ItemColor>
        ))}
      </ListColors>
      <Button
        disabled={
          skin.fontFamily === skins[index].fontFamily &&
          colorSkin === skin.color
        }
        onClick={handleClick}
      >
        {skin.fontFamily === skins[index].fontFamily && colorSkin === skin.color
          ? '✓'
          : 'Pick'}
      </Button>
    </Item>
  );
};

export default Skin;
