import React, {FC} from 'react';
import { Square } from '../Square/Square.tsx';
import { List } from './SquaresList.style';

interface SquaresListProps {
  squares: string[];
  onClick: (index: number) => void;
  disabled: boolean;
}

export const SquaresList: FC<SquaresListProps> = ({ squares, onClick, disabled }) => {
  return (
    <List>
      {Array(9)
        .fill(1)
        .map((_, index) => (
          <Square
            key={index}
            value={squares[index]}
            onClick={() => onClick(index)}
            disabled={disabled}
          />
        ))}
    </List>
  );
}
