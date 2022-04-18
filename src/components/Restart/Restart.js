import React from "react";
import { Container, Button, Text } from "./Restart.style";

export default function Restart({ winner, onClick, squares }) {
  const checkSquares = () => {
    for (const square of squares) {
      if (!square) return false;
    }
    return true;
  };

  return (
    <Container winner={winner} checkSquares={checkSquares()}>
      <Text>{winner ? `Winner: ${winner}` : "Draw"}</Text>
      <Button type="button" onClick={onClick}>
        New game
      </Button>
    </Container>
  );
}
