// JoinGame.jsx
import React from 'react';
import GetGame from './component/GetGame';


function JoinGame() {
  return (
    <div>
      <h1>Rock Paper Scissors Game</h1>
      <button onClick={() => console.log('Joining game...')}>
          Join a Game 
      </button>
      <GetGame/>
    </div>
  );
}

export default JoinGame;
