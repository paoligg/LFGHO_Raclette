import React, { useState } from 'react';
import { useContractWrite } from 'wagmi'; 
import { GHO_contract, Vault_Contract } from './contracts'; 
import Balance from './balance';


interface GetBalanceProps {

  user_Address: `0x${string}`;
}

const Vault = ( props: GetBalanceProps ) => {
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const { write : approveGHO, isLoading: approveGHOLoading} = useContractWrite({
    ...GHO_contract,
    functionName: "approve",
  });
  const handleApproveGHO = async () => {
      await approveGHO({ args: [Vault_Contract.address, BigInt(Number(depositAmount)*10**18)] });
    }

  const depositFunction = useContractWrite({
    address: Vault_Contract.address,
    abi: Vault_Contract.abi,
    functionName: 'deposit',
    args: [ BigInt(10), props.user_Address ],
  });


  const { write : depositGHO, isLoading: depositGHOLoading} = useContractWrite({
    ...Vault_Contract,
    functionName: "deposit",
  });

  const handleDeposit = async () => {
    console.log("depositAmount: ", depositAmount)
    if (depositAmount) {
      try {
        await depositGHO({ args: [BigInt(Number(depositAmount)*10**18), props.user_Address] });
        setDepositAmount('');
      } catch (error) {
        console.error('Deposit error:', error);
      }
    }
  };

  const { write : withdrawGHO, isLoading: withdrawGHOLoading} = useContractWrite({
    ...Vault_Contract,
    functionName: "withdraw",
  });

  const handleWithdraw = async () => {
    if (withdrawAmount) {
      try {
        await withdrawGHO({ args: [BigInt(Number(withdrawAmount)*10**18), props.user_Address, props.user_Address] });
        setWithdrawAmount('');
      } catch (error) {
        console.error('Withdraw error:', error);
      }
    }
  };

  return (
    <div>
      <h2>Vault</h2>
      <p>Current Vault Balance: <Balance user_Address={props.user_Address} token_Address={Vault_Contract.address}/> Tokens</p>
      <div>
        <input
          type="text"
          placeholder="Enter deposit amount"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <button onClick={handleApproveGHO}>Approve</button>
        <button onClick={handleDeposit}>Deposit</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter withdraw amount"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
        <button onClick={handleWithdraw}>Withdraw</button>
        
      </div>
    </div>
  );
};

export default Vault;
