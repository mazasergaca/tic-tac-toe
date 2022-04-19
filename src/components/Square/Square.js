import React from 'react';
import { Item, Button, Value } from './Square.style';

export default function Square({ value, onClick, disabled }) {
  return (
    <Item>
      <Button type="button" onClick={onClick} disabled={disabled}>
        <Value>{value}</Value>
      </Button>
    </Item>
  );
}
