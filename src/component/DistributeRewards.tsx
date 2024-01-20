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
            <button onClick={() => setIsModalOpen(true)}>Distribute Rewards</button>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            {addresses.map((address, index) => (
                                <div key={index}>
                                    <label>Player n° {index + 1} Address:</label>
                                    <input
                                        type="text"
                                        value={address}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                    />
                                </div>
                            ))}
                            <button type="submit">Submit</button>
                        </form>
                        <button onClick={() => setIsModalOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DistributeRewards;
