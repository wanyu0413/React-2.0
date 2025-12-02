const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard({ onSeletedSquare, turns }) {
  let gameboard = initialGameboard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameboard[row][col] = player;
  }

  // const [gameboard, setGameboard] = useState(initialGameboard);

  // function handleSeletedCell(rowIndex, colIndex) {
  //   setGameboard(prevGameboard => {
  //     const UpdatedGameboard = [...prevGameboard.map(innerArray => [...innerArray])]
  //     UpdatedGameboard[rowIndex][colIndex] = activePlayerSymbol;
  //     return UpdatedGameboard;
  //   })
  //   onSeletedSquare();
  // }

  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSeletedSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
