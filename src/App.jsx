import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';
import JoinGame from './JoinGame'; 
import LandingPage from './component/landing_page/landing_page.tsx';
import Layout from './layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/JoinGame/:wantedName" element={<JoinGame />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;