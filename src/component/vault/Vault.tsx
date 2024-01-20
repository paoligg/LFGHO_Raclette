import React, { useState, useEffect } from 'react';
import { useContractWrite, useWaitForTransaction, useContractRead } from 'wagmi'; 
import { GHO_contract, Vault_Contract } from '../contracts'; 
import './vault.css';

interface GetBalanceProps {
  user_Address: `0x${string}`;
  onClose: () => void;
}

const Vault = (props: GetBalanceProps) => {

  const [depositAmount, setDepositAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [phase, setPhase] = useState('');
  const [userBalance, setUserBalance] = useState<number | undefined>(undefined);

  const {data: readData, isLoading: readLoading, isError } = useContractRead({
    address: Vault_Contract.address,
    abi: Vault_Contract.abi,
    functionName: 'balanceOf',
    args: [props.user_Address],
    onSuccess: (data) => {
      const readableBalance = Number(data.toString()) * 10**-18;
      setUserBalance(readableBalance);
    },
  });

  const { write: approveGHO, data:dataApprove } = useContractWrite({
    ...GHO_contract,
    functionName: "approve",
  });

  const {
    data: receipt,
    isLoading: approveGHOLoading,
    isSuccess: approveGHOSuccess,
  } = useWaitForTransaction({ hash: dataApprove?.hash });

  const { write: depositGHO, data: dataDeposit } = useContractWrite({
    ...Vault_Contract,
    functionName: "deposit",
  });

  const {
    data: receipt2,
    isLoading: depositGHOLoading,
    isSuccess: depositGHOSuccess,
  } = useWaitForTransaction({ hash: dataDeposit?.hash });

  const handleApproveAndDeposit = async () => {
    if (depositAmount) {
      try {
        await approveGHO({ args: [Vault_Contract.address, BigInt(Number(depositAmount) * 10 ** 18)] });
      } catch (error) {
        console.error('Transaction error:', error);
      }
    }
  };

  useEffect(() => {
    if (dataApprove) {
      console.log("deposit amount", depositAmount);
      depositGHO({ args: [BigInt(Number(depositAmount) * 10 ** 18), props.user_Address] });
    }
  }, [approveGHOSuccess]);

  useEffect(() => {
    if (depositGHOSuccess) {
      setPhase('done');
    } else if (approveGHOSuccess) {
      setPhase('deposit');
    } else if (approveGHOLoading) {
      setPhase('approval');
    }
  }, [approveGHOLoading, approveGHOSuccess, depositGHOSuccess]);

  return (
    <div className="get-gho-form">
      <h2 className="form-title">Vault</h2>
      <p>Current R-GHO Balance: {userBalance?.toFixed(0)} R-GHO</p>
      <div className="form-field">
        <input
          className="input-field"
          type="text"
          placeholder="Enter deposit amount"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <button className="action-button" onClick={handleApproveAndDeposit} disabled={isLoading }>
          {isLoading ? 'Loading...' : ( 'Approve and Deposit' )}
        </button>
      </div>
      <div className="slider-container">
          <div className={`phase approval ${phase === 'approval' ? 'green' : ''}`}>
            <div className="dot-label">Approve</div>
          </div>
          <div className={`line ${phase === 'deposit' ? 'green' : ''}`}></div>
          <div className={`phase deposit ${phase === 'deposit' ? 'green' : ''}`}>
            <div className="dot-label">Deposit</div>
          </div>
          <div className={`line ${phase === 'done' ? 'green' : ''}`}></div>
          <div className={`phase done ${phase === 'done' ? 'green' : ''}`}>
            <div className="dot-label">Done</div>
          </div>
        </div>
      <button className="close-button" onClick={props.onClose}>Close</button>
      
    </div>
  );
};

export default Vault;
