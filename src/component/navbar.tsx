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
    <nav className="flex p-4 bg-gray-800 text-white">
      <img src="src\component\images\logo.png" alt="logo" height="120" width="120"  />
      <button onClick={handleRedirectToHome} className="text-lg font-bold">LFRaclette</button>
      <div className="ml-auto flex items-center space-x-4"> {/* Flex container */}
        <Balance token_Address={GHO_contract.address} user_Address='0x2ff00bC1e813E52034203107B80f0A54a4cefB71'/>
        <ConnectKitButton />
        <div>
          
        </div>
      </div>
    </nav>
  );

}

export default Navbar;
