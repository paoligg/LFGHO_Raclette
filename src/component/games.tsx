import React, { useState, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt'; // Import VanillaTilt
import './DisplayCards.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const logosData = [
  {
    name: 'Rock Paper Scissors',
    imageSrc: 'src/component/images/rockpaperscissors.png',
    onClick: () => {
      alert("Let's play Rock Paper Scissors!");
    },
  },
  {
    name: 'Colonist',
    imageSrc: 'src/component/images/colonist.png',
    onClick: () => {
      alert("Let's play Colonist!");
    },
  },
  {
    name: 'Chess',
    imageSrc: 'src/component/images/chess.webp',
    onClick: () => {
      alert("Let's play Chess!");
    },
  },
];

export function DisplayCards() {

  const navigate = useNavigate();

  logosData.forEach(logo => {
      logo.onClick = () => navigate('/JoinGame'); 
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
          <div className='content'>
            <img
              src={logosData[index].imageSrc}
              alt={logosData[index].name}
              style={{ width: '80%', height: 'auto' , padding: '10px'}}
            />
            <h3>{logosData[index].name}</h3>
            <a href="#" onClick={logosData[index].onClick}>Read More</a>
          </div>
        </div>
      ))}
      <button onClick={rotateCards}>Rotate Cards</button>
    </div>
    );
};

export default DisplayCards;
