import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { calculateWinner } from 'src/utils/calculate-winner';
import computer from 'src/utils/computer';
import GameField from '../../components/GameField/GameField';
import SquaresList from '../../components/SquaresList/SquaresList';
import InfoTable from '../../components/InfoTable/InfoTable';
import Restart from '../../components/Restart/Restart';
import Container from '../../components/Container/Container';

const Game = () => {
  const initialSquares = Array(9).fill(null);
  const [players, setPlayers] = useState(false);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const timerId = useRef<NodeJS.Timeout | null>(null);

  const location = useLocation();
  const typeGame = new URLSearchParams(location.search).get('type');

  useEffect(() => {
    if (typeGame === 'one-player') setPlayers(false);
    if (typeGame === 'two-players') setPlayers(true);
    // eslint-disable-next-line
  }, []);

  const onRestartClick = (): void => {
    setSquares(initialSquares);
    setXIsNext(true);
    setDisabled(false);
    clearTimeout(timerId.current as NodeJS.Timeout);
  };

  const handleClick = (index: number): void => {
    const newSquares = [...squares];
    if (calculateWinner(squares) || newSquares[index]) {
      clearTimeout(timerId.current as NodeJS.Timeout);
      return;
    }
    newSquares[index] = xIsNext ? 'X' : 'O';

    if (players) {
      setSquares(newSquares);
      setXIsNext(!xIsNext);
    } else {
      setXIsNext(false);
      setDisabled(true);
      setSquares(newSquares);

      timerId.current = setTimeout((): void => {
        const x = computer(newSquares);
        setSquares(x);
        setDisabled(false);
        setXIsNext(true);
      }, Math.random() * 1000);
    }
  };

  return (
    <Container>
      <InfoTable winner={calculateWinner(squares)} xIsNext={xIsNext} />
      <GameField>
        <SquaresList
          squares={squares}
          onClick={handleClick}
          disabled={disabled}
        />
        <Restart
          winner={calculateWinner(squares)}
          onClick={onRestartClick}
          squares={squares}
          players={players}
        />
      </GameField>
    </Container>
  );
};

export default Game;
