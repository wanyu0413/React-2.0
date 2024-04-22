import React, { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [ playerName, setplayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleNameChange(event) {
      setplayerName(event.target.value);
    };

    function handleEditClick() {
        setIsEditing((editing) => !isEditing);
    }

    let editabkePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
      editabkePlayerName = <input type="text" value={playerName} required onChange={handleNameChange}/>;
    }
    // Listening to a change on the input and then feeding taht updated value back to the state is called two-way binding.🔱
    
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
