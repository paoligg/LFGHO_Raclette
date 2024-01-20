import React, { useState } from 'react';
import { useContractRead } from 'wagmi';
import { GHO_contract } from './contracts';
import Balance from './balance';
import { useAccount } from 'wagmi';
import Vault from './vault/vault';
import GetGho from './getgho/getgho';

const GhoInfo = (props) => {
  const [isGetGhoOpen, setIsGetGhoOpen] = useState(false);
  const [isVaultOpen, setIsVaultOpen] = useState(false);

  let { address: userAddress } = useAccount();
  if (userAddress === undefined) {
    userAddress = '0x00';
  }

  const openGetGhoModal = () => {
    setIsGetGhoOpen(true);
  };

  const closeGetGhoModal = () => {
    setIsGetGhoOpen(false);
  };

  const openVaultModal = () => {
    setIsVaultOpen(true);
  };

  const closeVaultModal = () => {
    setIsVaultOpen(false);
  };

  return (
    
    <div className="bg-black p-8 rounded-lg shadow-xl text-white grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Vault Section */}
    <div className="flex flex-col justify-between items-center p-4 h-full">
      <img src="/images/vault_logo.png" alt="Vault" className="w-64 h-64"/>
      <div>
        <h1 className="text-3xl font-extrabold mb-2">Wanna play ?</h1>
        <p className="text-lg font-light mb-4">Stake some Gho in our Vault !</p>
      </div>
      <button onClick={openVaultModal} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full mt-4">
        Vault
      </button>
    </div>

    {/* Facilitator Section */}
    <div className="flex flex-col justify-between items-center p-4 h-full">
      <img src="/images/gho_logo.png" alt="GHO" className="w-78 h-64"/>
      <div>
        <h1 className="text-3xl font-extrabold mb-2">No more GHO?</h1>
        <p className="text-lg font-light mb-4">You can mint some from the official facilitator Aave Pool Ethereum V3</p>
      </div>
      <button onClick={openGetGhoModal} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full mt-4">
        Mint Gho
      </button>
    </div>
      {isGetGhoOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50 text-black">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <GetGho onClose={closeGetGhoModal} />
          </div>
        </div>
      )}
      
      {isVaultOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50 text-black">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Vault onClose={closeVaultModal} user_Address={userAddress} />
          </div>
        </div>
      )}

      {/* Modals remain unchanged */}
    </div>
  );
};

export default GhoInfo;