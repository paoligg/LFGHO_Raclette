import { useState, useEffect } from 'react';
import { Vault_Contract, GHO_contract } from './contracts';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import React from 'react';

const CreateGame= (gamename:string) =>{
    const { address: account } = useAccount();

    const [players, setPlayers] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [playerPrice, setPlayerPrice] = useState([BigInt(0)]);

    const playerInputs = Array.from({ length: players }, (_, index) => {
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const updatedArray = [...playerPrice];
            updatedArray[index] = BigInt(Number(e.target.value));
            setPlayerPrice(updatedArray);
        };

        return (
            <div key={index}>
                <span>Player {index + 1}</span>
                <input type="text" onChange={handleInputChange} />
            </div>
        );
    });

    const { write : createGame, isLoading: createGameLoading} = useContractWrite({
        ...Vault_Contract,
        functionName: "createGame", 
    });
    const handleCreateGame = async () => {

        const sum = playerPrice.reduce((acc, curr) => acc + curr, BigInt(0));
        if (sum === BigInt(100)) {
            if (account !== undefined) {
                await createGame({ args: [gamename, BigInt(Number(totalPrice)), playerPrice] });
            }
        } else {
            console.log("Sum of player prices does not equal total price");
        }
    }

    return (
        <div>
            <h1>Create Game</h1>
            <span>Number of players</span>
            <input type="number" onChange={(e)=>setPlayers(Number(e.target.value))} />
            <br />
            <span>Total Price</span>
            <input type="number" onChange={(e)=>setTotalPrice(Number(e.target.value)*10**18)} />
            <br />
            <span>Price Repartition in % </span>
            {playerInputs}
            <br />
        </div>
    );
};

export default CreateGame;