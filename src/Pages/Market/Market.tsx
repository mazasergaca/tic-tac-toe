import React from 'react';
import Container from 'src/components/Container/Container';
import { useCoinsContext } from 'src/context/CoinsContext';
import sprite from '../../assets/sprite.svg';
import Skin from 'src/components/Skin/Skin';
import {
  Coins,
  LinkStyled,
  Svg,
  Title,
  WrapperCoin,
  WrapperHeader,
  WrapperItems,
} from './Market.styles';

const Market = () => {
  const { coins } = useCoinsContext();
  return (
    <Container>
      <WrapperHeader>
        <LinkStyled to="/menu">⇐</LinkStyled>
        <Title>Market</Title>
        <WrapperCoin>
          <Svg>
            <use href={sprite + '#alien-coin'}></use>
          </Svg>
          <Coins>{coins}</Coins>
        </WrapperCoin>
      </WrapperHeader>
      <WrapperItems>
        <Skin />
      </WrapperItems>
    </Container>
  );
};

export default Market;
