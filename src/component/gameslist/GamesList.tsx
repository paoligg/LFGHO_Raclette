import { useState, useEffect } from 'react';
import { Vault_Contract, GHO_contract } from '../contracts';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CreateGame from '../creategame/CreateGame';
import GetGame from '../get_game/GetGame';
import './gameslist.css';

const GamesList = () => {
    const { wantedname } = useParams();
    const navigate = useNavigate();
    if (wantedname === undefined) {
        navigate("/");
        throw new Error("No game name provided");
    }
    const [gamesnumber, setGamesnumber] = useState(0);
    const { data: numberGames } = useContractRead({
        ...Vault_Contract,
        functionName: "getNumberGames",
    });

    useEffect(() => {
        if (numberGames) {
            setGamesnumber(Number(numberGames));
            console.log("number of games: ", numberGames);
        }
    }, [numberGames]);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };


      const backgroundImageUrl = `/images/${wantedname}.png`;

      return (
        <div className="flex items-center flex-col">
            <h1 className=" text-[#ff8150] p-5 w-full text-center text-5xl font-bold">LET'S F******* PLAY {wantedname.toUpperCase()}</h1> 
            <button onClick={openModal} className=" bg-orange-950 hover:bg-orange-600 rounded-md w-4/5 text-gray-50 py-2 ">
                Create Game
            </button>
            <div style={{backgroundImage : `url(${backgroundImageUrl})`}} className='w-4/5 min-h-[50vh] bg-no-repeat bg-center flex flex-row p-10 mt-5 mx-5 border-orange-300 border-solid border-2 rounded-lg bg-[300px_auto] flex-wrap'>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <CreateGame gamename={wantedname} onClose={closeModal} />
                    </div>
                </div>
            )}
    
                {Array.from({ length: gamesnumber }, (_, num) => (
                  <div key={num}>
                    <GetGame index={num} wantedGame={wantedname}  />
                  </div>
                ))}
            </div>
        </div>
    );
};

export default GamesList;