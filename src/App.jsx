import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';
import JoinGame from './JoinGame'; // Assurez-vous que le chemin est correct
import LandingPage from './component/landing_page/landing_page.tsx';
import Layout from './layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <LandingPage /> } />
          <Route path="/JoinGame/" element={<JoinGame />} />
        </Route >
      </Routes>
    </Router>

  );
}

export default App;