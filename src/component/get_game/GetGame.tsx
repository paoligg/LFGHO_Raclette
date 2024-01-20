import React, { useState, useEffect, useRef, RefObject } from 'react';
import { Vault_Contract, GHO_contract } from '../contracts';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import EnterGame from '../EnterGame';
import DistributeRewards from '../DistributeRewards';
import VanillaTilt from 'vanilla-tilt';
import './GetGame.css';

const GetGame = ({ index, wantedGame }: { index: number; wantedGame: string }) => {
    const [id, setId] = useState(0);
    const [gameName, setGameName] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [numberOfPlayers, setNumberOfPlayers] = useState(0);
    const [repartition, setRepartition] = useState([0]);
    const [participants, setParticipants] = useState(['']);
    const [started, setStarted] = useState(false);
    const [finished, setFinished] = useState(false);
    const [showDistributeModal, setShowDistributeModal] = useState(false);


    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (card) {
            VanillaTilt.init(card, {
                max: 25,
                speed: 400,
                glare: true,
                'max-glare': 1,
            });

            // Cleanup function
            // Cleanup function
            return () => {
                const tiltNode = card as unknown as { vanillaTilt?: { destroy: () => void } };
                tiltNode.vanillaTilt?.destroy();
            };

        }
    }, [cardRef, gameName, wantedGame]);



    const fetchGame = async () => {
        const { data: readData } = useContractRead({
            ...Vault_Contract,
            functionName: 'getGame',
            args: [BigInt(index)],
            onSuccess: (readData) => {
                console.log(readData);
                setId(Number(readData[0]));
                setGameName(readData[1]);
                setTotalPrice(Number(readData[2]));
                setNumberOfPlayers(Number(readData[3]));
                const repartitionAsNumbers = readData[4].map((bigintValue) => Number(bigintValue));
                setRepartition(repartitionAsNumbers);
                const participantsAsStrings = (readData[5] as string[]).map((address) => address.toString());
                setParticipants(participantsAsStrings);
                setStarted(readData[6]);
                setFinished(readData[7]);
            },
        });
    };

    fetchGame();

    function getOrdinalSuffix(number) {
        const remainder10 = number % 10;
        const remainder100 = number % 100;

        if (remainder10 === 1 && remainder100 !== 11) {
            return `${number}st`;
        } else if (remainder10 === 2 && remainder100 !== 12) {
            return `${number}nd`;
        } else if (remainder10 === 3 && remainder100 !== 13) {
            return `${number}rd`;
        } else {
            return `${number}th`;
        }
    }

    let gameStateClass = "waiting";
    let gameState = "Waiting For Players";
    let gameStateBackgroundClass = "bg-orange-200"
    if (started) {
        if (finished) {
            gameStateClass = "game-over";
            gameState = "Game Is Over";
            gameStateBackgroundClass = "bg-rose-200"
        }
        else {
            gameStateClass = "in-progress";
            gameState = "Game In Progress";
            gameStateBackgroundClass = "bg-green-200"
        }
    }

    return (
        <div>
            {gameName === wantedGame ? (
                <div className="container">
                    <div ref={cardRef} className={`game ${gameStateClass} styled-bg`}>
                        <div className="content">
                            <div>Game Id: {id}</div>
                            <div>
                                <span role="img" aria-label="Players" style={{ marginRight: '6px', fontSize: '24px' }}>
                                    👥
                                </span>
                                {numberOfPlayers} {numberOfPlayers !== 1 ? (` players`) : (` player`)}
                            </div>

                            <div>
                                <span role="img" aria-label="Trophy" style={{ marginRight: '6px', fontSize: '24px' }}>
                                    🏆
                                </span>
                                {totalPrice / 1e18} R-GHO
                            </div>
                            <div>
                                {repartition.map((percentage, index) => (
                                    <span key={index}>
                                        {getOrdinalSuffix(index + 1)}: {percentage}%
                                        {index !== repartition.length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                            </div>
                            <div className="players">
                                Players: {participants.map(address => <span className="player-name" key={address}>{address.slice(0, 6)}..</span>)}
                            </div>

                            <div className={`game-state ${gameStateClass} ${gameStateBackgroundClass}`}>
                                {gameState}
                            </div>
                            {!started ? (
                                <EnterGame gameid={id} />
                            ) : (!finished && (
                                <DistributeRewards gameid={id} numberOfPlayers={numberOfPlayers} onClose={() => setShowDistributeModal(false)} />
                            ))}


                        </div>
                    </div>
                </div>
            ) : null
            }
        </div >
    );
};

export default GetGame;
