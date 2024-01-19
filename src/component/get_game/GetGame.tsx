import { useState, useEffect } from 'react';
import { Vault_Contract, GHO_contract } from '../contracts';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import React from 'react';
import EnterGame from "../EnterGame";
import "./GetGame.css"



const GetGame = ({ index, wantedGame }: { index: number, wantedGame: string }) => {

    const [id, setId] = useState(0);
    const [gameName, setGameName] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [numberOfPlayers, setNumberOfPlayers] = useState(0);
    const [repartition, setRepartition] = useState([0]);
    const [participants, setParticipants] = useState([""]);
    const [started, setStarted] = useState(false);
    const [finished, setFinished] = useState(false);



    const fetchGame = async () => {


        // Utilisez le hook à l'intérieur de la fonction composante
        const { data: readData } = useContractRead({
            ...Vault_Contract,
            functionName: "getGame",
            args: [BigInt(index)],
            onSuccess: (readData) => {
                console.log(readData);
                setId(Number((readData[0])));
                setGameName(readData[1]);
                setTotalPrice(Number(readData[2]));
                setNumberOfPlayers(Number(readData[3]));
                const repartitionAsNumbers = readData[4].map(bigintValue => Number(bigintValue));
                setRepartition(repartitionAsNumbers);
                const participantsAsStrings = (readData[5] as string[]).map(address => address.toString());
                setParticipants(participantsAsStrings);
                setStarted(readData[6]);
                setFinished(readData[7]);
            }
        });

    }



    fetchGame();

    const printinfo = () => {
        console.log(Vault_Contract);
    };


    function getOrdinalSuffix(number) {
        const suffixes = ['st', 'nd', 'rd'];
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


    let bgColor = "bg-orange-200"
    let gameState = "Game in progress"
    if (!started) {
        bgColor = "bg-green-200"
        gameState = "Waiting for players"
    }
    if (finished) {
        bgColor = "bg-red-200"
        gameState = "Gave is over"
    }

    return (
        <div className="container">
            <div className={`game ${bgColor} textColor-black`}>
                {gameName === wantedGame ? (
                    <div className="content">
                        <div>Game Id: {id}</div>
                        <div>Number Of Players: {numberOfPlayers}</div>
                        <div>Total Price: {totalPrice / 1e18} R-GHO</div>
                        <div>
                            {repartition.map((percentage, index) => (
                                <div key={index}>
                                    {getOrdinalSuffix(index + 1)} : {percentage}%
                                </div>
                            ))}
                        </div>
                        <div>
                            Players: {participants.map(address => `${address.slice(0, 6)}..`).join(' ')}
                        </div>
                        <br />
                        <div>{gameState}</div>
                        <br />
                        {!started ? <EnterGame gameid={id} /> : null}
                    </div>
                ) : null}
            </div>
        </div>



    );
};

export default GetGame;
