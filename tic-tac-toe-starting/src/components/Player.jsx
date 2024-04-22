import React, { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [ playerName, setplayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !isEditing);
    }

    let editabkePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        playerName = <input type="text" value={playerName} required />;
    }
    
  return (
    <li>
      <span className="player">
        {editabkePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing? 'Save' : 'Edit'}</button>
    </li>
  );
}
