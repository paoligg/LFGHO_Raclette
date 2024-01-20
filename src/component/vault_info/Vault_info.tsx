import React, { useEffect, useState } from 'react';
import { useContractRead } from 'wagmi'; // Import the correct contract library
import { Vault_Contract } from '../contracts'; // Import the Vault contract

const VaultInfo = () => {
  const [numberOfGames, setNumberOfGames] = useState(0);
  const [totalRghoSupply, setTotalRghoSupply] = useState(0);

  // Read the total number of games

    const { data: readData, isLoading: readLoading, isError } = useContractRead({
        address:Vault_Contract.address, // Use the Vault contract
        abi: Vault_Contract.abi, // Pass the Vault ABI
        functionName: 'getNumberGames', // Specify the function name
        onSuccess: (data) => {
            const nbGames = Number(data.toString());
            setNumberOfGames(nbGames);
          },
      });
     
   

  // Read the total R-GHO supply
  
    const { data: readData2, isLoading: readLoading2 } = useContractRead({
        ...Vault_Contract, // Use the Vault contract
        functionName: 'totalSupply', // Specify the function name
        onSuccess: (data) => {
            const nbTokens = Number(data.toString()) * 10 ** -18;
            setTotalRghoSupply(nbTokens);
          },
        });


  return (
    <div className="">
   
      <div className="">
        <strong>Total Number of Games:</strong> <span className='underline'>{numberOfGames}</span>
      </div>
      <div>
        <strong>Total R-GHO Supply:</strong> <span className='underline'>${totalRghoSupply}</span>
      </div>
    </div>
  );
};

export default VaultInfo;
