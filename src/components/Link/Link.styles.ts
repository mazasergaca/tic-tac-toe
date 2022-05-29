import { Link } from 'react-router-dom';
import styled from 'styled-components';

type StylesProps = {
  bgc: string;
  color: string;
  size: number;
};

export const LinkStyled = styled(Link)<StylesProps>`
  padding: 10px 36px;

  font-family: inherit;
  font-size: ${props => props.size + 'px'};

  border: none;
  border-radius: 20px;
  background-color: ${props => props.bgc};
  color: ${props => props.color};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.bgc + '90'};
  }
`;
