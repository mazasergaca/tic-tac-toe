import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { calculateWinner } from 'src/utils/calculate-winner';
import computer from 'src/utils/computer';
import SquaresList from '../../components/SquaresList/SquaresList';
import InfoTable from '../../components/InfoTable/InfoTable';
import Restart from '../../components/Restart/Restart';
import Container from '../../components/Container/Container';

const Game = () => {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [winner, setWinner] = useState<{
    winner: string;
    lines: number[];
  } | null>(null);
  const [players, setPlayers] = useState(false);
  const [xIsNext, setXIsNext] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const timerId = useRef<NodeJS.Timeout | null>(null);

  const location = useLocation();
  const typeGame = new URLSearchParams(location.search).get('type');

  useEffect(() => {
    if (winner?.winner) clearTimeout(timerId.current as NodeJS.Timeout);
  }, [winner]);

  useEffect(() => {
    setWinner(calculateWinner(squares));
  }, [squares]);

  useEffect(() => {
    if (typeGame === 'one-player') setPlayers(false);
    else if (typeGame === 'two-players') setPlayers(true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    return () => clearTimeout(timerId.current as NodeJS.Timeout);
  }, []);

  const onRestartClick = (): void => {
    setSquares(initialSquares);
    setXIsNext(true);
    setDisabled(false);
    setWinner(null);
    clearTimeout(timerId.current as NodeJS.Timeout);
  };

  const handleClick = (index: number): void => {
    const newSquares = [...squares];
    if (winner?.winner || newSquares[index]) {
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
      }, Math.random() * 1500);
    }
  };

  return (
    <Container>
      <InfoTable winner={winner} xIsNext={xIsNext} />
      <SquaresList
        winner={winner}
        squares={squares}
        onClick={handleClick}
        disabled={disabled}
      />
      <Restart
        winner={winner}
        onClick={onRestartClick}
        squares={squares}
        players={players}
      />
    </Container>
  );
};

export default Game;
