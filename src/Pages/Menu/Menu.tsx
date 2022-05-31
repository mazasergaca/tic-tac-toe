import React from 'react';
import { useCoinsContext } from 'src/context/CoinsContext';
import sprite from '../../assets/sprite.svg';
import MenuNav from 'src/components/MenuNav/MenuNav';
import Container from 'src/components/Container/Container';
import { Title, Svg, WrapperHeader, WrapperCoin, Coins } from './Menu.styles';

const Menu = () => {
  const { coins } = useCoinsContext();
  return (
    <Container>
      <WrapperHeader>
        <Title>Menu</Title>
        <WrapperCoin>
          <Svg>
            <use href={sprite + '#alien-coin'}></use>
          </Svg>
          <Coins>{coins}</Coins>
        </WrapperCoin>
      </WrapperHeader>

      <MenuNav />
    </Container>
  );
};

export default Menu;
