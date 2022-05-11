import React, { FC } from 'react';
import { Field } from './GameField.style';

interface GameFieldProps {
  children: React.ReactChild | React.ReactNode;
}

const GameField: FC<GameFieldProps> = ({ children }) => {
  return <Field>{children}</Field>;
};
export default GameField;
