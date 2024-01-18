import { useState } from 'react';
import { AAVE_Pool_GHO, AAVE_Deposit_ETH, GHO_Proxy, GHO_contract } from './contracts';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import React from 'react';

const GetGho= () =>{
    const { address: account } = useAccount();

    const [depositAmount, setDepositAmount] = useState('0');
    const handleDepositAmountChange = (e) => {
        setDepositAmount(e);
    }
    const { write : depositETH, isLoading: depositETHLoading} = useContractWrite({
        ...AAVE_Deposit_ETH,
        functionName: "depositETH", 
    });
    const validateDeposit = async (amount:string) => {
        if( account != undefined) {
            await depositETH({ args: [account,account,0], value: BigInt(Number(amount)*10**18)});
        }
    };

    const [borrowAmount, setborrowAmount] = useState('0');
    const handleBorrowAmountChange = (e) => {
        setborrowAmount(e);
    }

    const { write : borrowGHO, isLoading: borrowGHOLoading} = useContractWrite({
        ...GHO_Proxy,
        functionName: "borrow", 
    });

    const borrow = async (amount:string) => {
        if( account != undefined) {
            await borrowGHO({ args: [GHO_contract.address,BigInt(Number(amount)*10**18), BigInt(2),0,account] });
        }
    };

    return (
        <div>
            <h1>AAVE GHO Pool</h1>
            <input type="text" onChange={(e)=>handleDepositAmountChange(e.target.value)} />
            <br />
            <button onClick={() => validateDeposit(depositAmount)}>Validate Deposit</button>
            <br />

            <input type="text" onChange={(e)=>handleBorrowAmountChange(e.target.value)} />
            <br />
            <button onClick={()=>borrow(borrowAmount)}>Borrow Tokens</button>
        </div>
    );
};

export default GetGho;