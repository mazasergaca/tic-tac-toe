import React, { FC } from 'react';
import { Item, Button, Value } from './Square.style';

interface SquareProps {
  value: string;
  onClick: () => void;
  disabled: boolean;
}

const Square: FC<SquareProps> = ({ value, onClick, disabled }) => {
  return (
    <Item>
      <Button type="button" onClick={onClick} disabled={disabled}>
        <Value>{value}</Value>
      </Button>
    </Item>
  );
};

export default Square;