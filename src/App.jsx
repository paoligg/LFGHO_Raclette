import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';
import Navbar from './component/navbar';
import Games from './component/games';
import GhoInfo from './component/gho_info';
import JoinGame from './JoinGame.jsx'; // Assurez-vous que le chemin est correct

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
          <Games />
          <hr />
        </>
        } />
        <Route path="/JoinGame" element={<JoinGame />} />
        
      </Routes>
     
    </Router>

  );
}

export default App;
