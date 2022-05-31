import styled from 'styled-components';

export const Container = styled.div`
  padding: 44px;
  margin: 0 auto;
  min-width: 320px;
  max-width: 480px;
`;

export const Title = styled.h1`
  position: relative;
  font-size: 48px;
  line-height: 1.15;

  color: #fff;

  &::after {
    position: absolute;
    content: '';
    display: block;
    height: 4px;
    width: 200px;

    border-radius: 10px;
    background-color: #ffa800;
  }
`;

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
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
