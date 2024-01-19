import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';
import Navbar from './component/navbar';
import DisplayCards from './component/games_carrousel/games.tsx';
import GhoInfo from './component/gho_info';
import GetGho from './component/getgho/getgho.tsx';
import JoinGame from './JoinGame.jsx'; // Assurez-vous que le chemin est correct
import LandingPage from './component/landing_page/landing_page.tsx';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/connectkitdemo/" 
        element={
          <>
          <LandingPage />
          </>
        } />
        <Route path="/JoinGame" element={<JoinGame />} />
        
      </Routes>
     
    </Router>

  );
}

export default App;
