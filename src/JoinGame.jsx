import React from 'react';
import GamesList from './component/gameslist/GamesList';
import { useParams } from 'react-router-dom';
import './component/gameslist/gameslist.css';

function JoinGame() {
  return (
    <div className="games-list"> 
      <GamesList wantedname={wantedName} />
    </div>
  );
}

export default JoinGame;
