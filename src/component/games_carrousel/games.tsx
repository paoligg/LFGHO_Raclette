import React, { useState, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt'; // Import VanillaTilt
import './DisplayCards.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const logosData = [
  {
    name: 'Rock Paper Scissors',
    wantedName: 'shifumi',
    imageSrc: 'images/rockpaperscissors.png',
    onClick: () => {
    },
  },
  {
    name: 'Colonist',
    wantedName: 'colonist',
    imageSrc: 'images/colonist.png',
    onClick: () => {
    },
  },
  {
    name: 'Chess',
    wantedName: 'chess',
    imageSrc: 'images/chess.webp',
    onClick: () => {
    },
  },
];

export function DisplayCards() {

  const navigate = useNavigate();

  // Modifier les fonctions onClick pour chaque jeu
  logosData.forEach(logo => {
      logo.onClick = () => navigate(`/JoinGame/${logo.wantedName}`); // Assurez-vous que le chemin correspond à votre route
    }
  );
  
  const [cardIndices, setCardIndices] = useState([0, 1, 2]);

  useEffect(() => {
    // Convert the NodeListOf<Element> to an array of HTMLElements
    const cardElements = Array.from(document.querySelectorAll(".card")) as HTMLElement[];

    // Initialize VanillaTilt with the array of elements
    VanillaTilt.init(cardElements, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 1,
    });
  }, []); // Empty dependency array ensures it runs once after the initial render

  const rotateCards = () => {
    // Rotate the indices of the cards
    const rotatedIndices = [cardIndices[1], cardIndices[2], cardIndices[0]];
    setCardIndices(rotatedIndices);
  };

  return (
    <div className="container">
      {cardIndices.map((index) => (
        <div
          key={index}
          className='card'
          data-tilt // Add this attribute for VanillaTilt to recognize the element
        >
          <a href="#" onClick={logosData[index].onClick}> 
            <div className='content'>
              <img
                src={logosData[index].imageSrc}
                alt={logosData[index].name}
                style={{ width: '80%', height: 'auto' , padding: '10px'}}
              />
              <h3>{logosData[index].name}</h3>
              <h2>Play !</h2>
              
            </div>
          </a>
        </div>
      ))}
      <button className='button' onClick={rotateCards}>Rotate Cards</button>
    </div>
    );
};

export default DisplayCards;
