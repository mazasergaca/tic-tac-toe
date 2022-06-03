import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 38px;
  color: #fff;
`;

export const LinkStyled = styled(Link)`
  font-size: 40px;

  color: #fff;
  transition: transform 250ms;

  &:hover {
    transform: scale(1.1);
  }
`;

export const WrapperCoin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Svg = styled.svg`
  height: 35px;
  width: 35px;
`;

export const Coins = styled.p`
  margin-top: 5px;
  padding: 3px 15px;

  border-radius: 20px;
  color: #fff;
  background-color: #40c7a9;
`;

export const WrapperItems = styled.div`
  padding: 30px 0;
`;
