import React from "react";
import { Item, Button } from "./Square.style";

export default function Square({ value, onClick }) {
  return (
    <Item>
      <Button onClick={onClick}>{value}</Button>
    </Item>
  );
}
