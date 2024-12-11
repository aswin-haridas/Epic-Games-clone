import chevronLeft from "../assets/icons8-chevron-left-24.png";
import chevronRight from "../assets/icons8-chevron-right-24.png";
import rightArrow from "../assets/icons8-right-24.png";

export default function HeroSection() {
  return (
    <section id="hp-prim-show" >
      <div className="container">
        <div className="top-bar">
          <ul className="options">
            <li className="option active">Discover</li>
            <li className="option">Browse</li>
          </ul>
          <div className="search">
            <input placeholder="Search" />
          </div>
        </div>
        <div className="content">
          <div className="game-banner">
            <img src="https://cdn2.unrealengine.com/Diesel%2Fstore%2Ffeatured-carousel-jfo-shenmue-phoenixpoint%2FFeatured-carousel-horizontal-1080-1920x1080-0168a527c1d2aa846622d3c722b2ab3f789d4def.jpg" />
          </div>
          <div className="game-details">
            <div className="top">
              <div className="game-change-arrows">
                <img src={chevronLeft} />
                <img src={chevronRight} />
              </div>
              <div className="active-and-other-dots">
                <span className="dot active-dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
            <div className="main-details">
              <p className="available-bool">AVAILABLE NOW</p>
              <h2 className="game-title">Phoenix Point</h2>
              <p className="game-details-txt">
                Fight to save humanity in this turn-based strategy title from
                the creator of the XCOM series.
              </p>
              <button className="shop-btn">
                Buy Now <img src={rightArrow} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

