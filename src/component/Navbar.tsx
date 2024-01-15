import React from 'react';
import { ConnectKitButton } from 'connectkit';

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <h1 className="text-lg font-bold">My Game Platform</h1>
      <div>
        <ConnectKitButton />
      </div>
    </nav>
  );
};

export default Navbar;
