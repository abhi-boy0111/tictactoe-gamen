import Board from './components/Board';
import { useState } from 'react';
import './style.scss';
import { claculateWiner } from './winner';

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = claculateWiner(square);
  const nextPlayr = isXNext ? 'X' : '0';

  const statusMessage = winner
    ? `Winner is ${winner}`
    : `Next Player is ${nextPlayr}`;

  console.log(winner);

  const handleSquareClick = clickedPosition => {
    if (square[clickedPosition] || winner) {
      return;
    }
    setSquare(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : '0';
        }

        return squareValue;
      });
    });
    setIsXNext(currentIsXNext => !currentIsXNext);
  };
  return (
    <div className="app">
      {statusMessage}
      <Board square={square} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
