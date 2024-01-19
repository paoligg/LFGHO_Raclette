import React from 'react';
import { useState } from 'react';
import { useContractRead } from 'wagmi';
import { GHO_contract } from './contracts';


interface GetBalanceProps {
  token_Address: `0x${string}`;
  user_Address: `0x${string}`;
}

export function Balance(props: GetBalanceProps) {
  const [userBalance, setUserBalance] = useState<number | undefined>(undefined);

  const { data: readData, isLoading: readLoading, isError } = useContractRead({
    address: props.token_Address,
    abi: GHO_contract.abi,
    functionName: 'balanceOf',
    args: [props.user_Address],
    onSuccess: (data) => {
      // Convert BigInt to a readable number and then to JavaScript number
      const readableBalance = Number(data.toString()) * 10**-18;
      setUserBalance(readableBalance);
    },
  });

  return (
    <div>
        <span className=''>
        {userBalance?.toFixed(0)} GHO
        </span>
    </div>
   
  )
}

export default Balance;