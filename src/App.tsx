import React from 'react';
import './global.css'
import Navbar from './component/Navbar'; // Ensure correct file path and naming

function App() {



  
  return (
    <div className="flex flex-col h-screen bg-purple-200"> {/* Flexbox and full height */}
      <Navbar />
      <div className="flex-grow flex justify-center items-center "> {/* Center content */}
        <h1 className="text-2xl font-bold text-yellow-500">Welcome to the Game</h1>

      </div>
    </div>
  );
}

export default App;
