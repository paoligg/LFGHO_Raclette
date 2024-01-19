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

      <div className="separation">Trusted By</div>

      <div className="howItWorks">How it works</div>

      <div className="gho_info">
        <GhoInfo />
      </div>
    <Footer />
    </div>
  );
};

export default LandingPage;
