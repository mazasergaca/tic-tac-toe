import React, { useState, useRef } from 'react';
import GameField from './components/GameField/GameField';
import SquaresList from './components/SquaresList/SquaresList';
import { Global } from './styles/global';
import Title from './components/Title/Title';
import InfoTable from './components/InfoTable/InfoTable';
import Restart from './components/Restart/Restart';
import computer from './utils/computer';
import Container from './components/Container/Container';

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }
  return null;
}

const App = () => {
  const initialSquares = Array(9).fill(null);
  const [players, setPlayers] = useState(false);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const timerId = useRef<NodeJS.Timeout | null>(null);

  const togglePlayers = () => {
    setPlayers(!players);
    onRestartClick();
    setDisabled(false);

    clearTimeout(timerId.current as NodeJS.Timeout);
  };

  const onRestartClick = () => {
    setSquares(initialSquares);
    setXIsNext(true);
    setDisabled(false);
    clearTimeout(timerId.current as NodeJS.Timeout);
  };

  const handleClick = (index: number) => {
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

      timerId.current = setTimeout(() => {
        const x = computer(newSquares);
        setSquares(x);
        setDisabled(false);
        setXIsNext(true);
      }, Math.random() * 1000);
    }
  };

  return (
    <Container>
      <Global />
      <Title />
      <InfoTable
        winner={calculateWinner(squares)}
        xIsNext={xIsNext}
        togglePlayers={togglePlayers}
        players={players}
      />
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
        />
      </GameField>
    </Container>
  );
};

export default App;
