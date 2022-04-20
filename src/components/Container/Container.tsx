import React,{ FC } from 'react';
import { ContainerStyled } from './Container.style';

interface ContainerProps {
  children: React.ReactChild | React.ReactNode
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
}
