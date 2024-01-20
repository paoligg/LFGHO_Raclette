import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';
import JoinGame from './JoinGame'; 
import LandingPage from './component/landingpage/LandingPage.tsx';
import Layout from './layout';
import GamesList from './component/gameslist/GamesList.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/JoinGame/:wantedname" element={<GamesList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;