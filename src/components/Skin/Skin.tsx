import React from 'react';
import { Item, WrapperSkins, SkinStyled, Button } from './Skin.styles';

const Skin = () => {
  return (
    <Item>
      <WrapperSkins>
        <SkinStyled>X</SkinStyled>
        <SkinStyled>O</SkinStyled>
      </WrapperSkins>
      <Button disabled>Picked</Button>
    </Item>
  );
};

export default Skin;
