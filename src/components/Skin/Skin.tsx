import React, { useState } from 'react';
import { useThemeSkinContext } from 'src/context/ThemeSkinContext';
import { skins } from 'src/utils/skins';
import { colors } from 'src/utils/colors';
import {
  Button,
  ButtonColor,
  ItemColor,
  ListColors,
  SkinStyled,
  Wrapper,
  WrapperSkins,
  ArrowButton,
} from './Skin.styles';

const Skin = () => {
  const [indexSkin, setIndexSkin] = useState(
    localStorage.getItem('index-skin')
      ? Number(localStorage.getItem('index-skin'))
      : 0
  );
  const [colorSkin, setColorSkin] = useState(
    localStorage.getItem('skin-color') || colors[0]
  );

  const { skin, setSkin } = useThemeSkinContext();

  const handleClick = () => {
    const newTheme = { ...skins[indexSkin], color: colorSkin };
    setSkin(newTheme);
    localStorage.setItem('theme-skin', JSON.stringify(newTheme));
    localStorage.setItem(`skin-color`, colorSkin);
    localStorage.setItem('index-skin', JSON.stringify(indexSkin));
  };

  const changeColorSkin = (c: string): void => {
    setColorSkin(c);
  };

  const incrementIndexSkin = () => setIndexSkin(prev => prev + 1);
  const decrementIndexSkin = () => setIndexSkin(prev => prev - 1);
  return (
    <Wrapper>
      <WrapperSkins>
        <SkinStyled
          initial={{ opacity: 0, scaleY: 0.7 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.3 }}
          style={{ ...skins[indexSkin], color: colorSkin }}
        >
          X
        </SkinStyled>
        <SkinStyled
          initial={{ opacity: 0, scaleY: 0.7 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.3 }}
          style={{ ...skins[indexSkin], color: colorSkin }}
        >
          O
        </SkinStyled>
        <ArrowButton
          className="left"
          onClick={decrementIndexSkin}
          disabled={indexSkin === 0}
        >
          ⇐
        </ArrowButton>
        <ArrowButton
          className="right"
          onClick={incrementIndexSkin}
          disabled={indexSkin === skins.length - 1}
        >
          ⇒
        </ArrowButton>
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
        onClick={handleClick}
        disabled={
          skins[indexSkin].fontFamily === skin.fontFamily &&
          colorSkin === skin.color
        }
      >
        {skins[indexSkin].fontFamily === skin.fontFamily &&
        colorSkin === skin.color
          ? '✓'
          : ' Pick'}
      </Button>
    </Wrapper>
  );
};

export default Skin;
