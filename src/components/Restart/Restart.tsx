import React, { FC } from 'react';
import { Container, Button, Text } from './Restart.style';

interface RestartProps {
  winner: string | null;
  onClick: () => void;
  squares: string[];
}

const Restart: FC<RestartProps> = ({ winner, onClick, squares }) => {
  const checkSquares = () => {
    for (const square of squares) {
      if (!square) return false;
    }
    return true;
  };

  return (
    <Container winner={winner || checkSquares()}>
      <Text>{winner ? `Winner: ${winner}` : 'Draw'}</Text>
      <Button type="button" onClick={onClick}>
        New game
      </Button>
    </Container>
  );
};

export default Restart;
