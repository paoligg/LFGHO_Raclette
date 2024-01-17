import React from 'react';

type Logo = {
  name: string;
  imageSrc: string;
  onClick: () => void;
};

const logosData: Logo[] = [
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
  // Add more logos as needed
];

export function Games() {
  return (
    <div>
      <div>
        <DisplayGames logos={logosData} />
      </div>
    </div>
  );
}

type DisplayGamesProps = {
  logos: Logo[]; // Specify the type of the logos prop
};

function DisplayGames({ logos }: DisplayGamesProps) {
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)', // Create 5 columns
        gap: '10px', // Add some spacing between grid items
      };
    return (
    <div style={gridContainerStyle}>
        {logos.map((logo, index) => (
            <div key={index} onClick={logo.onClick} style={{ cursor: 'pointer' }}>
            <img src={logo.imageSrc} width="150" height="150" alt={logo.name} />
            {logo.name}
            </div>
        ))}
    </div>
    );
}

export default Games;
