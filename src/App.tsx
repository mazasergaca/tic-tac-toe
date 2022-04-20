import React, { useState } from 'react';
// @ts-ignore
import { GameField } from './components/GameField/GameField.tsx'; 
// @ts-ignore
import { SquaresList } from './components/SquaresList/SquaresList.tsx';
import { Global } from './styles/global';
import { Title } from './components/Title/Title.js';
// @ts-ignore
import { InfoTable } from './components/InfoTable/InfoTable.tsx';
// @ts-ignore
import { Restart } from './components/Restart/Restart.tsx';
// @ts-ignore
import computer from './utils/computer.ts';
// @ts-ignore
import { Container } from 'components/Container/Container.tsx';

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
let timerId = null;

const App = () => {
  const initialSquares = Array(9).fill(null);
  const [players, setPlayers] = useState(false);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const togglePlayers = () => {
    setPlayers(!players);
    onRestartClick();
    setDisabled(false);

    clearTimeout(timerId);
  };

  const onRestartClick = () => {
    setSquares(initialSquares);
    setXIsNext(true);
    setDisabled(false);
    clearTimeout(timerId);
  };

  const handleClick = (index: number) => {
    const newSquares = [...squares];
    if (calculateWinner(squares) || newSquares[index]) {
      clearTimeout(timerId);
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

      timerId = setTimeout(() => {
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
