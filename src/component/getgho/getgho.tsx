import { useState } from 'react';
import { AAVE_Pool_GHO, AAVE_Deposit_ETH, GHO_Proxy, GHO_contract } from '../contracts';
import { useAccount, useContractWrite } from 'wagmi';
import React from 'react';
import './getgho.css'; // Import your CSS file

const GetGho = ({ onClose }) => {
    const { address: account } = useAccount();

    const [depositAmount, setDepositAmount] = useState('0');
    const handleDepositAmountChange = (e) => {
        setDepositAmount(e);
    };
    const { write: depositETH, isLoading: depositETHLoading } = useContractWrite({
        ...AAVE_Deposit_ETH,
        functionName: "depositETH",
    });
    const validateDeposit = async (amount) => {
        if (account !== undefined) {
            await depositETH({ args: [account, account, 0], value: BigInt(Number(amount) * 10 ** 18) });
        }
    };

    const [borrowAmount, setBorrowAmount] = useState('0');
    const handleBorrowAmountChange = (e) => {
        setBorrowAmount(e);
    };

    const { write: borrowGHO, isLoading: borrowGHOLoading } = useContractWrite({
        ...GHO_Proxy,
        functionName: "borrow",
    });

    const borrow = async (amount) => {
        if (account !== undefined) {
            await borrowGHO({ args: [GHO_contract.address, BigInt(Number(amount) * 10 ** 18), BigInt(2), 0, account] });
        }
    };

    return (
        <div className="get-gho-form">
            <h1 className="form-title">Mint Gho</h1>
            <button className="close-button" onClick={onClose}>Close</button>

            <div className="form-field">
                <label htmlFor="depositAmount">Deposit your ETH collateral</label>
                <input
                    type="text"
                    id="depositAmount"
                    value={depositAmount}
                    onChange={(e) => handleDepositAmountChange(e.target.value)}
                    className="input-field"
                />
                <button onClick={() => validateDeposit(depositAmount)} className="action-button">Validate Deposit</button>
            </div>

            <div className="form-field">
                <label htmlFor="borrowAmount">Borrow Amount:</label>
                <input
                    type="text"
                    id="borrowAmount"
                    value={borrowAmount}
                    onChange={(e) => handleBorrowAmountChange(e.target.value)}
                    className="input-field"
                />
                <button onClick={() => borrow(borrowAmount)} className="action-button">Borrow Tokens</button>
            </div>

            <div className="form-field">
                <p>Hint: if the transaction does not pass, it is probably because you don't have enough ETH in collateral. You can see your information on:</p>
                <a href="https://app.aave.com/?marketName=proto_sepolia_v3" target="_blank" rel="noopener noreferrer" className="aave-link">
                    Visit Aave Sepolia V3 Market
                </a>
            </div>
        </div>
    );
};

export default GetGho;
