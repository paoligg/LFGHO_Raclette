import { useState, useEffect } from 'react';
import { Vault_Contract, GHO_contract } from '../contracts';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import React from 'react';
import CreateGame from '../creategame/CreateGame';
import GetGame from '../get_game/GetGame';
import './gameslist.css';

const GamesList = ({wantedname} :{wantedname:string}) => {
    const [gamesnumber, setGamesnumber] = useState(0);
    const { data: numberGames } = useContractRead({
        ...Vault_Contract,
        functionName: "getNumberGames",
    });

    useEffect(() => {
        if (numberGames) {
            setGamesnumber(Number(numberGames));
        }
    }, [numberGames]);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

      return (
        <div className="games-list">
            <button onClick={openModal} className="create-game-button">
                Create Game
            </button>
    
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <CreateGame gamename={wantedname} onClose={closeModal} />
                    </div>
                </div>
            )}
    
            <div className="games-grid">
                {Array.from({ length: gamesnumber }, (_, num) => (
                  <div >
                    <GetGame index={num} wantedGame={wantedname} />
                  </div>
                ))}
            </div>
        </div>
    );
};

export default GamesList;