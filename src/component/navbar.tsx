import React from 'react';
import { ConnectKitButton } from 'connectkit';
import Balance from './balance';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';

function Navbar() {
  const navigate = useNavigate();
  const { address: account } = useAccount();
  const handleRedirectToHome = () => {
    navigate('/'); 
  };

  return (
    <nav className="bg-black text-white h-32 px-4 flex items-center justify-between fixed top-0 w-full z-10">
      <button onClick={handleRedirectToHome} className="flex items-center">
        <img src="/images/logo.png" height="120" width="120" />
        <span className="text-lg font-bold ml-8 text-5xl">LFRaclette</span>
      </button>
      <div className="flex items-center space-x-4">
        {account!=undefined ? (
          <Balance user_Address={account}/>
        ): null}
        
        <ConnectKitButton />
        {/* Add other components or buttons as needed */}
      </div>
    </nav>
  );
}

export default Navbar;
