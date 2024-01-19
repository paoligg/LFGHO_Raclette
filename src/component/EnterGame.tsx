import { useState, useEffect } from 'react';
import { Vault_Contract, GHO_contract } from './contracts';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import React from 'react';



const EnterGame = ({ gameid }: { gameid: number }) => {
    const { address: account } = useAccount();

    const { write: JoinGame, isLoading: createGameLoading } = useContractWrite({
        ...Vault_Contract,
        functionName: "enterGame",
    });
    const handleJoinGame = async () => {
        if (account !== undefined) {
            await JoinGame({ args: [BigInt(gameid)] });
        }
    }

    return (
        <div>
            <button onClick={() => handleJoinGame()}>Enter Game</button>
        </div>
    );
};

export default EnterGame;