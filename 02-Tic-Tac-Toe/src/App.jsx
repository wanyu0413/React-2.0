import { useState } from "react";
import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";
import Log from "./components/Log.jsx";

function activePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState();
  const activePlayer = activePlayer(gameTurns);

  function handleSeletSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevGameTurns) => {
      const currentPlayer = activePlayer(prevGameTurns);

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurns,
      ];

      return updateTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <Gameboard
          onSeletedSquare={handleSeletSquare}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
