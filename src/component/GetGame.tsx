import { useState, useEffect } from 'react';
import { Vault_Contract, GHO_contract } from './contracts';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import React from 'react';

type GameData = {
    iD: bigint;
    name: string;
    cost: bigint; 
    nombre_joueur:bigint;
    repartition:readonly bigint[];
    addresse_joueur:readonly `0x${string}`[];
    started:boolean;
    finished:boolean;

};
//[bigint, string, bigint, bigint, readonly bigint[], readonly `0x${string}`[], boolean, boolean]


const GetGame = () => {

    const [gameInfo, setGameInfo] = useState<GameData | null>(null);


    

        const fetchGames = async () => {
            

            // Utilisez le hook à l'intérieur de la fonction composante
            const {data:readData} =  useContractRead({
                ...Vault_Contract,
                functionName: "getGame",
                args: [BigInt(0)],
                onSuccess: (data) => {
                    // Convert BigInt to a readable number and then to JavaScript number
                    const readableBalance = data;
                    const gameData : GameData = {
                        iD : readableBalance[0],
                        name: readableBalance[1],
                        cost: readableBalance[2],
                        nombre_joueur: readableBalance[3],
                        repartition: readableBalance[4],
                        addresse_joueur: readableBalance[5],
                        started: readableBalance[6],
                        finished: readableBalance[7]

                    }
                    console.log(data)
                    setGameInfo(gameData);
                  }
            });
            //setGameInfo(GameInfo);
            
        } 
            
        
    
        fetchGames();

    const printinfo = () => {
        console.log(gameInfo);
    };

    return (
        <div>
            
            <div>
                Game Id : {gameInfo?.iD !== undefined ? gameInfo?.iD.toString() : 'Valeur non définie'}
                <br/>Name : {gameInfo?.name}
                <br/>cost: {gameInfo?.cost !== undefined ? gameInfo?.cost.toString() : 'Valeur non définie'}; 
                <br/>nombre_joueur: {gameInfo?.nombre_joueur !== undefined ? gameInfo?.nombre_joueur.toString() : 'Valeur non définie'}
                <br/>repartition: {gameInfo?.repartition !== undefined ? gameInfo?.repartition.toString() : 'Valeur non définie'}
                <br/>addresse_joueur: {gameInfo?.addresse_joueur !== undefined ? gameInfo?.addresse_joueur.toString() : 'Valeur non définie'}
                <br/>started: {gameInfo?.started.toString()}
                <br/>finished: {gameInfo?.finished.toString()}
                
            </div>
            
            
        </div>
    );
};

export default GetGame;
