import React from 'react';
import { ConnectKitButton } from 'connectkit';
import Balance from './balance';

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <h1 className="text-lg font-bold">My Game Platform</h1>
      <div>
        <Balance token_Address='0x6A4A9140b11f34787179164b64Fc4AD454867034' user_Address='0x5924C7d7f855e0bC8B44c741cB27233f2377D26F'/>
        <ConnectKitButton />
      </div>
    </nav>
  );
};

export default Navbar;