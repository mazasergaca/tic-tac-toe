import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import sprite from '../../assets/sprite.svg';
import {
  Container,
  WrapperButton,
  Button,
  Text,
  Backdrop,
  Svg,
} from './Restart.style';

interface RestartProps {
  winner: {
    winner: string;
    lines: number[];
  } | null;
  onClick: () => void;
  squares: string[];
  players: boolean;
}

const Restart: FC<RestartProps> = ({ winner, onClick, squares, players }) => {
  const navigation = useNavigate();

  const onClickBackBtn = () => {
    navigation('/menu');
  };

  const checkSquares = () => {
    for (const square of squares) {
      if (!square) return false;
    }
    return true;
  };

  return (
    <AnimatePresence>
      {(winner?.winner || checkSquares()) && (
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          // winner={winner?.winner || checkSquares()}
        >
          {players && (
            <Text
              initial={{ opacity: 0, y: -10, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              color={
                winner?.winner === 'X' || winner?.winner === 'O'
                  ? '#FFE03B'
                  : '#fff'
              }
            >
              {winner?.winner === 'X'
                ? 'Player One win!'
                : winner?.winner === 'O'
                ? 'Player Two Win!'
                : 'Draw'}
            </Text>
          )}
          {!players && (
            <Text
              initial={{ opacity: 0, y: -10, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              color={
                winner?.winner === 'X'
                  ? '#FFE03B'
                  : winner?.winner === 'O'
                  ? '#FF3B3B'
                  : '#fff'
              }
            >
              {winner?.winner === 'X'
                ? `You Win!`
                : winner?.winner === 'O'
                ? 'You Lose!'
                : 'Draw'}
            </Text>
          )}
          <Backdrop
            initial={{ opacity: 0, scaleY: 0.8 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            bgc={
              players && (winner?.winner === 'X' || winner?.winner === 'O')
                ? '#FF9900'
                : winner?.winner === 'X'
                ? '#FF9900'
                : winner?.winner === 'O'
                ? '#FF0000'
                : '#4C8BD4'
            }
          >
            <Svg
              initial={{ opacity: 0, scaleY: 0.7 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <use
                href={
                  sprite +
                  `${
                    players &&
                    (winner?.winner === 'X' || winner?.winner === 'O')
                      ? '#trophy'
                      : winner?.winner === 'X'
                      ? '#trophy'
                      : winner?.winner === 'O'
                      ? '#lose'
                      : '#handshake'
                  }`
                }
              ></use>
            </Svg>
          </Backdrop>
          <WrapperButton
            initial={{ opacity: 0, y: -10, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Button
              type="button"
              onClick={onClickBackBtn}
              bgc={
                players && (winner?.winner === 'X' || winner?.winner === 'O')
                  ? '#FF9900'
                  : winner?.winner === 'X'
                  ? '#FF9900'
                  : winner?.winner === 'O'
                  ? '#FF0000'
                  : '#4C8BD4'
              }
            >
              Back
            </Button>
            <Button
              type="button"
              onClick={onClick}
              bgc={
                players && (winner?.winner === 'X' || winner?.winner === 'O')
                  ? '#FF9900'
                  : winner?.winner === 'X'
                  ? '#FF9900'
                  : winner?.winner === 'O'
                  ? '#FF0000'
                  : '#4C8BD4'
              }
            >
              Play again
            </Button>
          </WrapperButton>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default Restart;
