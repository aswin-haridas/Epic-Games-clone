export const TopSellers = () => {
  return (
    <section id="top-sellers">
      <div className="container">
        <div className="top-bar">
          <h3 className="main-title">Top Sellers</h3>
          <button className="more">VIEW MORE</button>
        </div>
        <div className="games">
          <div className="game">
            <div className="img-box">
              <img
                className="game-img"
                src="https://cdn1.epicgames.com/undefined/offer/EGS_Bigben_Paranoia_S3-1084x1356-931b0c534dc68a9df8160626655116cf.jpg?h=854&resize=1&w=640"
                alt="game-pic"
              />
              <img
                className="game-logo"
                src="https://cdn1.epicgames.com/undefined/offer/EGS_Bigben_Paranoia_IC1_LogoColor-1850x550-7a55ac537940e1e360edc005fa78e351.png?h=270&resize=1&w=480"
              />
            </div>

            <h3 className="title">Paranoia</h3>
            <div className="sub-title">Konami</div>
            <div className="price">$10.99</div>
          </div>
          <div className="game">
            <div className="img-box">
              <img
                className="game-img"
                src="https://cdn1.epicgames.com/epic/offer/PhoenixPoint_NEWPortraitPromo-1280x1420-3ebed9c3972a5710778d97b6b1018905.png?h=854&resize=1&w=640"
                alt="game-pic"
              />
              <img
                className="game-logo"
                src="https://cdn1.epicgames.com/epic/offer/PhoenixPoint_whitePNG-3220x432-72c3516e13c5ae6b2c89e568b77973c0.png?h=270&resize=1&w=480"
              />
            </div>

            <h3 className="title">Phoenix Point</h3>
            <div className="sub-title">Snapshot Games</div>
            <div className="price">$20.00</div>
          </div>
          <div className="game">
            <div className="img-box">
              <img
                className="game-img"
                src="https://cdn1.epicgames.com/epic/offer/Arise_Portrait2-1280x1440-a48e80bc18bcd497eea6ccb752bcbfda.jpg?h=854&resize=1&w=640"
                alt="game-pic"
              />
              <img
                className="game-logo"
                src="https://cdn1.epicgames.com/undefined/offer/EGS_DEVELOPER_ARISE_IC1_WHITE-200x200-791a69d1f9875e505aeb468a1d8dd281.png?h=270&resize=1&w=480"
              />
            </div>

            <h3 className="title">Arise: A Simple Story</h3>
            <div className="sub-title">Piccolo | Techland</div>
            <div className="price">$15.00</div>
          </div>
          <div className="game">
            <div className="img-box">
              <img
                className="game-img"
                src="https://cdn1.epicgames.com/undefined/offer/Shenmue3_portraitpromo-1280x1420-1e524e5b26f65dfb4dcd44d3a7821419.jpg?h=854&resize=1&w=640"
                alt="game-pic"
              />
              <img
                className="game-logo"
                src="https://cdn1.epicgames.com/undefined/offer/Game-Logo_ShenmueIII-3168x692-b925655b198cf955c0802f4581faf6a3.png?h=270&resize=1&w=480"
              />
            </div>

            <h3 className="title">Shenmue III</h3>
            <div className="sub-title">Ysnet | Deepsilver</div>
            <div className="price">$4.99</div>
          </div>
          <div className="game">
            <div className="img-box">
              <img
                className="game-img"
                src="https://cdn1.epicgames.com/undefined/offer/SWJFO_ADHOC_510X680-510x680-04ec2ab0afa8b571f51c34577bf1ec09.jpg?h=854&resize=1&w=640"
                alt="game-pic"
              />
              <img className="game-logo" src="" />
            </div>

            <h3 className="title">Star Wars Jedi</h3>
            <div className="sub-title">Respawn Entertainment</div>
            <div className="price">$12.30</div>
          </div>
        </div>
      </div>
    </section>
  );
};
