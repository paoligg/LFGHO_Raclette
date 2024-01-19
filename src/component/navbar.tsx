import React from 'react';
import { ConnectKitButton } from 'connectkit';
import Balance from './balance';
import { GHO_contract } from './contracts';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleRedirectToHome = () => {
    navigate('/connectkitdemo/'); 
  };

  return (
    <nav className="bg-black text-white p-4 flex items-center justify-between fixed top-0 w-full z-10">
      <button onClick={handleRedirectToHome} className="flex items-center">
        <img src="src/component/images/logo.png" alt="logo" height="60" width="60" />
        <span className="text-lg font-bold ml-2">LFRaclette</span>
      </button>
      <div className="flex items-center space-x-4">
        <Balance token_Address={GHO_contract.address} user_Address='0x2ff00bC1e813E52034203107B80f0A54a4cefB71'/>
        <ConnectKitButton />
        {/* Add other components or buttons as needed */}
      </div>
    </nav>
  );
}

export default Navbar;
