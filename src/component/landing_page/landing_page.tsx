import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './landing_page.css';
import DisplayCards from '../games_carrousel/games';
import GhoInfo from '../gho_info';
import VaultInfo from '../vault_info/Vault_info';

const LandingPage = () => {
  return (
    <div className="grid-container">
     

      <div className="importantText">
        <div className="mainText">
          Play over 50+ different games with your friends or other online players
        </div>
        <div className="subText">Featuring GHO, the stablecoin from Aave</div>
        
        <div className="mainText text-white border p-4"><VaultInfo/></div>
        <ScrollLink to="gho_info" smooth={true} duration={1000}>
          <div className="callToAction">Get some R-GHO now !</div>
        </ScrollLink>
      </div>

      <div className="gamesCarousel">
        <DisplayCards />
      </div>

      <div className="teamSection">
        <div className="teamTitle">Our Team</div>
        <div className="teamMembers">
          
          <div className="teamMember">
            <a href="https://www.linkedin.com/in/antoine-sirot/">
              <img src="/images/antoine.jpg" alt="Antoine" className="roundImage"/>
            </a>
            <div className="memberName">Antoine</div>
          </div>
          <div className="teamMember">
            <a href="https://www.linkedin.com/in/hugo-schneegans/">
              <img src="/images/hugo.jpeg" alt="Hugo" className="roundImage" />
            </a>
            <div className="memberName">Hugo</div>
          </div>
          <div className="teamMember">
            <a href="https://www.linkedin.com/in/paolig-blan/">
              <img src="/images/paolig.jpg" alt="Paolig" className="roundImage" />
            </a>
            <div className="memberName">Paolig</div>
          </div>
          <div className="teamMember">
            <a href="https://www.linkedin.com/in/jean-teyssedre-106145258/">
              <img src="/images/jean.jpeg" alt="Jean" className="roundImage" />
            </a>
            <div className="memberName">Jean</div>
          </div>
          <div className="teamMember">
            <a href="https://www.linkedin.com/in/arthur-liot/">
              <img src="/images/arthur.jpeg" alt="Arthur" className="roundImage" />
            </a>
            <div className="memberName">Arthur</div>
          </div>
          </div>
        </div>

      <div className="how-it-works-container">
        <h1 className="how-it-works-title">How to play</h1>
        <h2 className="how-it-works-heading">LFRaclette uses Aave's new decentralized stablecoin. Players stake the GHO token in our <span className='underline'>secure ERC-4626 Vault</span>, and they get our in-game currency, the R-GHO.</h2>
        <h2 className="how-it-works-subheading">There are two ways to use the R-GHO:</h2>
        <ul className="how-it-works-list">
          <li className="how-it-works-list-item">
            <p>To enjoy games with your friends or other online players, you can simply stake GHO in our Vault, play, and claim back your GHO anytime!</p>
            <p className="simple">Simple !</p>
          </li>
          <li className="how-it-works-list-item">
            <p>For a greater challenge and higher risk/reward. Bet R-GHO in games to potentially win more and claim extra GHO upon cashing out!</p>
            <p className="expert">Expert !</p>
          </li>
        </ul>
      </div>


      <div className="gho_info">
        <GhoInfo />
      </div>
    </div>
  );
};

export default LandingPage;
