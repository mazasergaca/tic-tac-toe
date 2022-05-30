import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
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
  winner: string | null;
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
    <Container winner={winner || checkSquares()}>
      {players && (
        <Text color={winner === 'X' || winner === 'O' ? '#FFE03B' : '#fff'}>
          {winner === 'X'
            ? 'Player One win!'
            : winner === 'O'
            ? 'Player Two Win!'
            : 'Draw'}
        </Text>
      )}
      {!players && (
        <Text
          color={
            winner === 'X' ? '#FFE03B' : winner === 'O' ? '#FF3B3B' : '#fff'
          }
        >
          {winner === 'X' ? `You Win!` : winner === 'O' ? 'You Lose!' : 'Draw'}
        </Text>
      )}
      <Backdrop
        bgc={
          players && (winner === 'X' || winner === 'O')
            ? '#FF9900'
            : winner === 'X'
            ? '#FF9900'
            : winner === 'O'
            ? '#FF0000'
            : '#4C8BD4'
        }
      >
        <Svg>
          <use
            href={
              sprite +
              `${
                players && (winner === 'X' || winner === 'O')
                  ? '#trophy'
                  : winner === 'X'
                  ? '#trophy'
                  : winner === 'O'
                  ? '#lose'
                  : '#handshake'
              }`
            }
          ></use>
        </Svg>
      </Backdrop>
      <WrapperButton>
        <Button
          type="button"
          onClick={onClickBackBtn}
          bgc={
            players && (winner === 'X' || winner === 'O')
              ? '#FF9900'
              : winner === 'X'
              ? '#FF9900'
              : winner === 'O'
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
            players && (winner === 'X' || winner === 'O')
              ? '#FF9900'
              : winner === 'X'
              ? '#FF9900'
              : winner === 'O'
              ? '#FF0000'
              : '#4C8BD4'
          }
        >
          Play again
        </Button>
      </WrapperButton>
    </Container>
  );
};

export default Restart;
