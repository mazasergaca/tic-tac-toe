import React from 'react';
import sprite from '../../assets/sprite.svg';
import MenuNav from 'src/components/MenuNav/MenuNav';
import {
  Container,
  Title,
  Svg,
  WrapperHeader,
  WrapperCoin,
  Coins,
} from './Menu.styles';

const Menu = () => {
  return (
    <Container>
      <WrapperHeader>
        <Title>Menu</Title>
        <WrapperCoin>
          <Svg>
            <use href={sprite + '#alien-coin'}></use>
          </Svg>
          <Coins>100</Coins>
        </WrapperCoin>
      </WrapperHeader>

      <MenuNav />
    </Container>
  );
};

export default Menu;
