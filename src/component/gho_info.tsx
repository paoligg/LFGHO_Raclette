import React, { useState } from 'react';
import { useContractRead } from 'wagmi';
import { GHO_contract } from './contracts';
import Balance from './balance';
import { useAccount } from 'wagmi';
import Vault from './vault';
import GetGho from './getgho/getgho';

const GhoInfo = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  let { address: userAddress } = useAccount();
  if (userAddress === undefined) {
    userAddress = '0x00';
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-blue-500 p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">GHO Information</h2>

      <>
        <p className="text-lg">
          Connected User: <span className="font-semibold">{userAddress}</span>
        </p>
        <p className="text-lg">
          GHO Balance: <Balance token_Address={GHO_contract.address} user_Address="0x2ff00bC1e813E52034203107B80f0A54a4cefB71" />
          <Vault user_Address={userAddress} />
        </p>

        {/* Inside the GhoInfo component */}
        <button onClick={openModal} className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4">
          Get GHO
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <GetGho onClose={closeModal} /> {/* Pass onClose prop */}
            </div>
          </div>
        )}

      </>
    </div>
  );
};

export default GhoInfo;
