import React from 'react';
import { useNavigate } from 'react-router-dom';

type Logo = {
  name: string;
  imageSrc: string;
  onClick: () => void;
};

const logosData: Logo[] = [
  {
    name: 'Rock Paper Scissors',
    imageSrc: 'src/component/images/rockpaperscissors.png',
    onClick: () => {} // Cette fonction sera définie plus tard
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
  // Ajoutez d'autres logos au besoin
];

export function Games() {
  const navigate = useNavigate();

  // Modifier les fonctions onClick pour chaque jeu
  logosData.forEach(logo => {
      logo.onClick = () => navigate('/JoinGame'); // Assurez-vous que le chemin correspond à votre route
    }
    // Ajoutez d'autres conditions pour d'autres jeux si nécessaire
  );

  return (
    <div>
      <div>
        <DisplayGames logos={logosData} />
      </div>
    </div>
  );
}

type DisplayGamesProps = {
  logos: Logo[];
};

function DisplayGames({ logos }: DisplayGamesProps) {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)', // Créer 5 colonnes
    gap: '10px', // Ajouter un espacement entre les éléments de la grille
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
