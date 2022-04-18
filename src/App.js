import { useState } from "react";
import GameField from "./components/GameField";
import SquaresList from "./components/SquaresList";
import { Global } from "./styles/global";
import TitleStyled from "./components/Title";
import InfoTable from "./components/InfoTable";
import Restart from "./components/Restart";
import computer from "./utils/computer";

function calculateWinner(squares) {
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

function App() {
  const initialSquares = Array(9).fill(null);
  const [players, setPlayers] = useState(false);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);

  const togglePlayers = () => {
    setPlayers(!players);
    onRestartClick();
  };

  const onRestartClick = () => {
    setSquares(initialSquares);
    setXIsNext(true);
  };

  const handleClick = (index) => {
    const newSquares = [...squares];
    if (calculateWinner(squares) || newSquares[index]) {
      return;
    }
    newSquares[index] = xIsNext ? "X" : "O";

    if (players) {
      setSquares(newSquares);
      setXIsNext(!xIsNext);
    } else {
      const x = computer(newSquares);
      setSquares(x);
    }
  };

  return (
    <>
      <Global />
      <TitleStyled />
      <InfoTable
        winner={calculateWinner(squares)}
        xIsNext={xIsNext}
        togglePlayers={togglePlayers}
        players={players}
      />
      <GameField>
        <SquaresList squares={squares} onClick={handleClick} />
        <Restart
          winner={calculateWinner(squares)}
          onClick={onRestartClick}
          squares={squares}
        />
      </GameField>
    </>
  );
}

export default App;
