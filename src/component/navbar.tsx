import React from 'react';
import { ConnectKitButton } from 'connectkit';
import Balance from './balance';
import { GHO_contract } from './contracts';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';

function Navbar() {
  const navigate = useNavigate();
  const { address: account } = useAccount();
  const handleRedirectToHome = () => {
    navigate('/'); 
  };

  return (
    <nav className="bg-black text-white h-20 px-4 flex items-center justify-between fixed top-0 w-full z-10">
      <button onClick={handleRedirectToHome} className="flex items-center">
        <img src="images/logo.png" alt="logo" height="80" width="80" />
        <span className="text-lg font-bold ml-8 text-3xl">LFRaclette</span>
      </button>
      <div className="flex items-center space-x-4">
        {account!=undefined ? (
          <Balance token_Address={GHO_contract.address} user_Address={account}/>
        ): null}
        
        <ConnectKitButton />
        {/* Add other components or buttons as needed */}
      </div>
    </nav>
  );
}

export default Navbar;
