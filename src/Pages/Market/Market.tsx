import React from 'react';
import Container from 'src/components/Container/Container';
import { useCoinsContext } from 'src/context/CoinsContext';
import sprite from '../../assets/sprite.svg';
import ListSkins from 'src/components/ListSkins/ListSkins';
import {
  Coins,
  LinkStyled,
  Svg,
  Title,
  WrapperCoin,
  WrapperHeader,
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
      <ListSkins />
    </Container>
  );
};

export default Market;
