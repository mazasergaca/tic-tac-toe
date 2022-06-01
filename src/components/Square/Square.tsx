import React, { FC } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useThemeSkinContext } from 'src/context/ThemeSkinContext';
import { Item, Button, Value } from './Square.style';

interface SquareProps {
  value: string;
  onClick: () => void;
  disabled: boolean;
  isWinner: boolean;
}

const Square: FC<SquareProps> = ({ value, onClick, disabled, isWinner }) => {
  const { skin } = useThemeSkinContext();
  return (
    <Item>
      <Button
        isWinner={isWinner}
        type="button"
        onClick={onClick}
        disabled={disabled}
      >
        <AnimatePresence>
          {value && (
            <Value
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0 }}
              style={{ ...skin, fontSize: 80 }}
            >
              {value}
            </Value>
          )}
        </AnimatePresence>
      </Button>
    </Item>
  );
};

export default Square;
