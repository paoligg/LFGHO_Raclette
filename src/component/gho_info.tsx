import React from 'react';
import { useContractRead } from 'wagmi'; // Import the useContractRead hook
import { GHO_contract } from './contracts'; // Import the GHO contract ABI
import Balance from './balance';
import { useAccount } from "wagmi";
import { AccountNotFoundError } from 'viem/_types/errors/account';
import Vault from './vault';

const GhoInfo = (props) => {

    let { address: userAddress } = useAccount();
    if (userAddress === undefined) {
      userAddress = '0x00';
    }
    

  return (
    <div className="bg-blue-500 p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">GHO Information</h2>
     
        <>
          <p className="text-lg">
            Connected User: <span className="font-semibold">{userAddress}</span>
          </p>
          <p className="text-lg">
            GHO Balance: <Balance token_Address={GHO_contract.address} user_Address='0x2ff00bC1e813E52034203107B80f0A54a4cefB71'/>
            <Vault user_Address={userAddress}/>
          </p>
          
        </>
      
    </div>
  );
};

export default GhoInfo;
