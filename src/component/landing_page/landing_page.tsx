import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './landing_page.css';
import DisplayCards from '../games_carrousel/games';
import GhoInfo from '../gho_info';
import Footer from "../footer/footer";

const LandingPage = () => {
  return (
    <div className="grid-container">
     

      <div className="importantText">
        <div className="mainText">
          Play over 50+ different games with your friends or other online players
        </div>
        <div className="subText">Featuring GHO, the stablecoin from Aave</div>
        <ScrollLink to="gho_info" smooth={true} duration={1000}>
          <div className="callToAction">Get some GHO now !</div>
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

      <div className="howItWorks">
        <div className="mainText">
          How it works 
        </div>
        <div className="subText">Featuring GHO, the stablecoin from Aave</div>
      </div>


      <div className="gho_info">
        <GhoInfo />
      </div>
    <Footer />
    </div>
  );
};

export default LandingPage;
