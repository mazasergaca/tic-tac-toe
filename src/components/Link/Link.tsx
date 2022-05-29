import React, { FC, ReactNode } from 'react';
import { LinkStyled } from './Link.styles';

interface LinkI {
  children: ReactNode;
  color?: string;
  size: number;
  bgc: string;
  to: string;
}

const Link: FC<LinkI> = ({ children, color = '#fff', size, bgc, to }) => {
  return (
    <LinkStyled color={color} size={size} bgc={bgc} to={to}>
      {children}
    </LinkStyled>
  );
};

export default Link;
