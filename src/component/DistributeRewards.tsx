import React, { useState, useEffect } from 'react';
import { useAccount, useWaitForTransaction, useContractWrite } from 'wagmi';
import { Vault_Contract } from './contracts';

const DistributeRewards = ({ gameid, numberOfPlayers, onClose }: { gameid: number, numberOfPlayers: number, onClose: () => void }) => {
    const { address: account } = useAccount();
    const [addresses, setAddresses] = useState(Array(numberOfPlayers).fill(''));
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { write: distributeRewards, data: dataDistributeRewards } = useContractWrite({
        ...Vault_Contract,
        functionName: "distributeRewards",
    });

    const { isSuccess: distributeSuccess } = useWaitForTransaction({ hash: dataDistributeRewards?.hash });

    useEffect(() => {
        if (distributeSuccess) {
            alert('You have successfully distributed the rewards!');
            setIsModalOpen(false);
        }
    }, [distributeSuccess]);

    const handleInputChange = (index: number, value: string) => {
        const newAddresses = [...addresses];
        newAddresses[index] = value;
        setAddresses(newAddresses);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (account !== undefined) {
            await distributeRewards({ args: [BigInt(gameid), addresses] });
        }
    };

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)} style={{ backgroundColor: '#333', color:'white', borderRadius: '5px', padding:'10px'}}>Distribute Rewards</button>
            {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        {addresses.map((address, index) => (
          <div key={index} className="flex flex-col">
            <label className="mb-2 font-semibold">Player n° {index + 1} Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="border border-gray-300 rounded p-2"
            />
          </div>
        ))}
        <button type="submit" className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600">Submit</button>
      </form>
      <button onClick={() => setIsModalOpen(false)} className="mt-4 w-full bg-red-500 text-white rounded p-2 hover:bg-red-600">Close</button>
    </div>
  </div>
)}

        </div>
    );
};

export default DistributeRewards;
