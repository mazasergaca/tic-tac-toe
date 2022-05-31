import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;

  margin-bottom: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const ContainerInfo = styled.div`
  padding: 0 10px;
  width: 100%;
  position: relative;
`;

export const LinkStyled = styled(Link)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);

  font-size: 40px;

  color: #fff;
`;

export const InfoText = styled.p`
  text-align: center;
  font-size: 30px;

  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;
