import facebookIcon from "../assets/icons8-facebook-32.png";
import twitterIcon from "../assets/icons8-twitter-50.png";
import youtubeIcon from "../assets/icons8-play-button-50.png";
import slideUpIcon from "../assets/icons8-slide-up-50.png";

export const Footer = () => {
  return (
    <footer>
      <div className="top-content">
        <div className="socials">
          <img src={facebookIcon} alt="fb" className="social" />
          <img src={twitterIcon} alt="twitter" className="social" />
          <img src={youtubeIcon} alt="yt" className="social" />
        </div>
        <div className="small-nav">
          <img src={slideUpIcon} alt="up" className="small-nav" />
        </div>
      </div>
      <div className="res-madeby">
        <div className="resources">
          <h3 className="small-title">Resources</h3>
          <div className="content">
            <ul className="resource-ctr">
              <li>Support-A-Creator</li>
              <li>Publish on Epic Games</li>
              <li>Careers</li>
            </ul>
            <ul className="resource-ctr">
              <li>Company</li>
              <li>Fan Art Policy</li>
              <li>UX Research</li>
            </ul>
            <ul className="resource-ctr">
              <li>Store EULA</li>
              <li>Online Services</li>
              <li>Community Rules</li>
            </ul>
          </div>
        </div>
        <div className="made-by">
          <h3 className="small-title">Made By Epic Games</h3>
          <div className="content">
            <ul className="madeby-ctr">
              <li>Battle Breakers</li>
              <li>Fortnite</li>
              <li>Infinity Blade</li>
              <li>Robo Recall</li>
            </ul>
            <ul className="madeby-ctr">
              <li>Shadow Complex</li>
              <li>Spyjinx</li>
              <li>Unreal tournament</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-cont">
        © 2019, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic
        Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the
        Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo
        are trademarks or registered trademarks of Epic Games, Inc. in the
        United States of America and elsewhere. Other brands or product names
        are the trademarks of their respective owners. Non-US transactions
        through Epic Games International, S.à r.l.
      </div>
      <div className="down-content">
        <div className="left-cont">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Store Refund Policy</li>
        </div>
        <div className="right-cont">
          <img
            src="https://huntpng.com/images250/epic-games-logo-png-11.png"
            alt="logo"
          />
        </div>
      </div>
    </footer>
  );
};
