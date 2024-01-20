import React, { useState, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './gamescarroussel.css';
import { useNavigate } from 'react-router-dom';

const logosData = [
  {
    name: 'Rock Paper Scissors',
    wantedName: 'shifumi',
    imageSrc: 'images/shifumi.png',
    onClick: () => {
    },
  },
  {
    name: 'Catan',
    wantedName: 'catan',
    imageSrc: 'images/catan.png',
    onClick: () => {
    },
  },
  {
    name: 'Chess',
    wantedName: 'chess',
    imageSrc: 'images/chess.png',
    onClick: () => {
    },
  },
   {
    name: 'Poker',
    wantedName: 'poker',
    imageSrc: 'images/poker.png',
    onClick: () => {
    },
  },
   {
    name: 'Monopoly',
    wantedName: 'monopoly',
    imageSrc: 'images/monopoly.png',
    onClick: () => {
    },
  },
];

export function DisplayCards() {

  const navigate = useNavigate();

  logosData.forEach(logo => {
      logo.onClick = () => navigate(`/JoinGame/${logo.wantedName}`);
    }
  );
  
   const [cardIndices, setCardIndices] = useState([0, 1, 2]);

  useEffect(() => {
    const cardElements = Array.from(document.querySelectorAll(".card")) as HTMLElement[];
    VanillaTilt.init(cardElements, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 1,
    });
  }, []);

  const rotateCards = () => {
    const nextIndex = (cardIndices[cardIndices.length - 1] + 1) % logosData.length;
    const newIndices = [...cardIndices.slice(1), nextIndex];
    setCardIndices(newIndices);
  };

  return (
    <div className="container">
      {cardIndices.map((index) => (
        <div key={index} className='card' data-tilt>
          <a href="" onClick={logosData[index].onClick}> 
            <div className='content'>
              <img
                src={logosData[index].imageSrc}
                alt={logosData[index].name}
                style={{ width: '80%', height: 'auto', padding: '10px' }}
              />
              <h3>{logosData[index].name}</h3>
              <h2>Play !</h2>
            </div>
          </a>
        </div>
      ))}
      <button className='button' onClick={rotateCards}>More Games</button>
    </div>
  );
};

export default DisplayCards;