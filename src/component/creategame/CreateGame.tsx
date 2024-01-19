import React, { useState } from 'react';
import { useAccount, useContractWrite } from 'wagmi';
import { Vault_Contract } from '../contracts';
import './creategame.css'; 

interface GetGameProps {
    gamename: string;
    onClose: () => void;
}

const CreateGame = (props: GetGameProps) => {
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
            <div key={index} className="form-field">
                <span>Player {index + 1}</span>
                <input 
                  type="text" 
                  onChange={handleInputChange}
                  className="input-field" 
                />
            </div>
        );
    });

    const { write: createGame } = useContractWrite({
        ...Vault_Contract,
        functionName: "createGame",
    });

    const handleCreateGame = async () => {
        const sum = playerPrice.reduce((acc, curr) => acc + curr, BigInt(0));
        if (sum === BigInt(100)) {
            if (account !== undefined) {
                await createGame({ args: [props.gamename, BigInt(Number(totalPrice)), playerPrice] });
            }
        } else {
            console.log("Sum of player prices does not equal total price");
        }
    };

    return (
        <div className="create-game-form">
            <h1 className="form-title">Create Game of {props.gamename} </h1>
            <button className="close-button" onClick={props.onClose}>Close</button>
            <div className='form-field'>
                <span>Number of players</span>
                <input 
                  type="number" 
                  onChange={(e) => setPlayers(Number(e.target.value))}
                  className="input-field"
                />
            </div>
            <div className='form-field'>
                <span>Total Price</span>
                <input 
                  type="number" 
                  onChange={(e) => setTotalPrice(Number(e.target.value) * 10 ** 18)}
                  className="input-field"
                />
            </div>
            <div className='form-field'>
                <span>Price Repartition in % </span>
                {playerInputs}
            </div>
            <button 
              onClick={() => handleCreateGame()}
              className="action-button"
            >
              Create Game
            </button>
        </div>
    );
};

export default CreateGame;
