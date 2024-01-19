import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';
import Navbar from './component/navbar';
import DisplayCards from './component/games';
import GhoInfo from './component/gho_info';
import GetGho from './component/getgho';
import CreateGame from './component/CreateGame';
import JoinGame from './JoinGame.jsx'; 

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/connectkitdemo/" 
        element={
          <>
          <GhoInfo />
          <hr />
          <DisplayCards />
          <hr />
          <GetGho />
        </>
        } />
        <Route path="/JoinGame" element={<JoinGame />} />
        
      </Routes>
     
    </Router>

  );
}

export default App;
