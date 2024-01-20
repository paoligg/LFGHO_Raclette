import React from 'react';
import { useState } from 'react';
import { useContractRead } from 'wagmi';
import { GHO_contract, Vault_Contract } from './contracts';

interface GetBalanceProps {
  user_Address: `0x${string}`;
}

export function Balance(props: GetBalanceProps) {
  const [userBalance, setUserBalance] = useState<number | undefined>(undefined);
  const [userRBalance, setUserRBalance] = useState<number | undefined>(undefined);

  const { data: readData, isLoading: readLoading, isError } = useContractRead({
    ...GHO_contract,
    functionName: 'balanceOf',
    args: [props.user_Address],
    onSuccess: (data) => {
      const readableBalance = Number(data.toString()) * 10 ** -18;
      setUserBalance(readableBalance);
    },
  });
  const { data: readRData, isLoading: readRLoading, isError: isRError } = useContractRead({
    ...Vault_Contract,
    functionName: 'balanceOf',
    args: [props.user_Address],
    onSuccess: (data) => {
      const readableBalance = Number(data.toString()) * 10 ** -18;
      setUserRBalance(readableBalance);
    },
  });

  return (
    <div>
      <a className='border border-solid border-white rounded p-2 hover:bg-orange-500' href={`https://sepolia.etherscan.io/address/${GHO_contract.address}`}>
        {userBalance?.toFixed(2)} GHO
      </a>
      {props.user_Address !== Vault_Contract.address && (
        <a className='border border-solid border-white rounded p-2 ml-5 hover:bg-orange-500' href={`https://sepolia.etherscan.io/address/${Vault_Contract.address}`}>
          {userRBalance?.toFixed(2)} R-GHO
        </a>
      )}
    </div>
  );
}

export default Balance;
