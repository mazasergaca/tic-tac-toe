import React, { FC } from 'react';
import Square from '../Square/Square';
import { List } from './SquaresList.style';

interface SquaresListProps {
  squares: string[];
  onClick: (index: number) => void;
  disabled: boolean;
  winner: {
    winner: string;
    lines: number[];
  } | null;
}

const SquaresList: FC<SquaresListProps> = ({
  squares,
  onClick,
  disabled,
  winner,
}) => {
  return (
    <List>
      {Array(9)
        .fill(1)
        .map((_, index) => (
          <Square
            key={index}
            isWinner={
              (winner?.winner && winner?.lines[0] === index) ||
              winner?.lines[1] === index ||
              winner?.lines[2] === index
            }
            value={squares[index]}
            onClick={() => onClick(index)}
            disabled={disabled}
          />
        ))}
    </List>
  );
};

export default SquaresList;
