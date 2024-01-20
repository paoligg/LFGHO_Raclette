import { useState, useEffect } from 'react';
import { Vault_Contract, GHO_contract } from './contracts';
import { useAccount, useWaitForTransaction, useContractWrite } from 'wagmi';
import React from 'react';



const EnterGame = ({ gameid }: { gameid: number }) => {
    const { address: account } = useAccount();

    const { write: JoinGame, data: dataEnterGame, isLoading: createGameLoading } = useContractWrite({
        ...Vault_Contract,
        functionName: "enterGame",
    });


    const {
        data: receipt,
        isLoading: enterLoading,
        isSuccess: enterSuccess,
    } = useWaitForTransaction({ hash: dataEnterGame?.hash });


    useEffect(() => {
        if (enterSuccess) {
            alert('You have successfully entered the game! Game content coming soon...');
        }
    }, [enterSuccess]);

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