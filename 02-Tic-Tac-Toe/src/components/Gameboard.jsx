import { useState } from "react";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard({ onSeletedSquare, activePlayerSymbol }) {
  const [gameboard, setGameboard] = useState(initialGameboard);

  function handleSeletedCell(rowIndex, colIndex) {
    setGameboard(prevGameboard => {
      const UpdatedGameboard = [...prevGameboard.map(innerArray => [...innerArray])]
      UpdatedGameboard[rowIndex][colIndex] = activePlayerSymbol;
      return UpdatedGameboard;
    })
    onSeletedSquare();
  }

  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSeletedCell(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
