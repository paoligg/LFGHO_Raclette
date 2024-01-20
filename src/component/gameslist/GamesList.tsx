import { useState, useEffect } from 'react';
import { Vault_Contract, GHO_contract } from '../contracts';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import React from 'react';
import CreateGame from '../creategame/CreateGame';
import GetGame from '../get_game/GetGame';
import './gameslist.css';
import Footer from "../footer/footer";

const GamesList = ({ wantedname }: { wantedname: string }) => {
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


    const backgroundImageUrl = `/images/${wantedname}.png`;

    const gamesListStyle = {
        minHeight: '100vh',
        width: '100%',
        margin: 0,
        padding: '2%',
        backgroundImage: `url(${backgroundImageUrl}), linear-gradient(180deg, rgba(5,5,5,1) 25%, rgba(255,136,0,1) 100%)`,
        backgroundSize: 'auto 300px, cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat, no-repeat',
        display: 'flex',
    };


    return (
        <div className="games-list">
            <h1 className="importantText">LET'S F******* PLAY {wantedname.toUpperCase()}</h1>
            <button onClick={openModal} className="create-game-button">
                Create Game
            </button>
            <div style={gamesListStyle}>
                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <CreateGame gamename={wantedname} onClose={closeModal} />
                        </div>
                    </div>
                )}

                <div style={gamesListStyle} className="games-grid">
                    {Array.from({ length: gamesnumber }, (_, num) => (
                        <GetGame key={num} index={num} wantedGame={wantedname} />
                    ))}
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default GamesList;