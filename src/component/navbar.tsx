import React from 'react';
import { ConnectKitButton } from 'connectkit';
import Balance from './balance';
import { GHO_contract } from './contracts';

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <h1 className="text-lg font-bold">My Game Platform</h1>
      <div>
        <Balance token_Address={GHO_contract.address} user_Address='0x2ff00bC1e813E52034203107B80f0A54a4cefB71'/>
        <ConnectKitButton />
      </div>
    </nav>
  );
};

export default Navbar;