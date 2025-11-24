import { useState } from "react";
import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState();

  function handleSeletSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" activePlayer={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="O" activePlayer={activePlayer === "O"} />
        </ol>
        <Gameboard onSeletedSquare={handleSeletSquare} />
      </div>
      LOG
    </main>
  );
}

export default App;
