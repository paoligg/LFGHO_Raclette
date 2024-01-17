import React, { useState, useEffect } from 'react';
import { useContractWrite, useContractRead } from 'wagmi'; // Import the necessary hooks
import { GHO_contract, Vault_Contract } from './contracts'; // Import the Vault contract ABI
import Balance from './balance';


interface GetBalanceProps {

  user_Address: `0x${string}`;
}

const Vault = ( props: GetBalanceProps ) => {
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  

  // Create deposit function
  const depositFunction = useContractWrite({
    address: Vault_Contract.address,
    abi: Vault_Contract.abi,
    functionName: 'deposit',
    args: [ BigInt(10), props.user_Address ],
  });

//   // Create withdraw function
//   const withdrawFunction = useContractWrite({
//     address: Vault_Contract.address,
//     abi: Vault_Contract.abi,
//     functionName: 'withdraw',
//     args: [ BigInt(10), props.user_Address ],
//   });

  // Handle deposit
  const handleDeposit = async () => {
    if (depositAmount) {
      try {
        // const depositAmountWei = depositAmount * 10 ** 18; // Convert to Wei
        // await depositFunction.send(depositAmountWei);
        setDepositAmount('');
      } catch (error) {
        console.error('Deposit error:', error);
      }
    }
  };

  // Handle withdraw
//   const handleWithdraw = async () => {
//     if (withdrawAmount) {
//       try {
//         const withdrawAmountWei = withdrawAmount * 10 ** 18; // Convert to Wei
//         await withdrawFunction.send(withdrawAmountWei);
//         setWithdrawAmount('');
//       } catch (error) {
//         console.error('Withdraw error:', error);
//       }
//     }
//   };

  return (
    <div>
      <h2>Vault</h2>
      <p>Current Vault Balance: <Balance user_Address={props.user_Address} token_Address={Vault_Contract.address}/> Tokens</p>
      <div>
        <input
          type="number"
          placeholder="Enter deposit amount"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <button onClick={handleDeposit}>Deposit</button>
      </div>
      <div>
        <input
          type="number"
          placeholder="Enter withdraw amount"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
        
      </div>
    </div>
  );
};

export default Vault;
