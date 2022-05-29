import styled from 'styled-components';
import { Link } from 'react-router-dom';

type StylesI = {
  bgc: string;
  borderColor: string;
};

export const Container = styled.div`
  margin-top: 70px;
`;

export const MenuItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &:not(:last-child) {
    margin-bottom: 70px;
  }

  &:hover div {
    transform: translateY(-50%) scale(1.1) rotate(30deg);
  }
`;

export const Field = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) scale(1);

  border-radius: 50%;
  background-color: #ffa800;
  border: 1px solid #ff8a00;
`;

export const Svg = styled.svg`
  height: 60px;
  width: 70px;
`;

export const LinkStyled = styled(Link)<StylesI>`
  padding: 10px 0 10px 100px;
  width: 100%;

  text-align: center;
  border-radius: 20px;
  border: 2px solid ${props => props.borderColor};
  color: #fff;
  background-color: ${props => props.bgc};
  transition: background-color 250ms;

  &:hover {
    background-color: #d00e0e;
  }
`;
