export const FreeGames = () => {
  return (
    <section id="free-games-weekly">
      <div className="container">
        <h3 className="main-title">Free Games Every Week</h3>
        <div className="games">
          <div className="game">
            <img
              src="https://cdn1.epicgames.com/undefined/offer/EGS_ThunderLotus_JotunValhallaEdition_S1-2560x1440-3de6d0151b1c97a08a8579167814682c.jpg?h=480&resize=1&w=854"
              alt="game"
            />
            <h5 className="is-it-free">FREE NOW</h5>
            <h4 className="name">Jotun Valhalla Edition</h4>
            <h5 className="free-time">Free Now - Dec 12 at 09.29 PM</h5>
          </div>
          <div className="game">
            <img
              src="https://cdn1.epicgames.com/epic/offer/TheEscapists_Newsfeed Post-2560x1440-587a8d844cab1246b3253f2f98fab8a7.jpg?h=480&resize=1&w=854"
              alt="game"
            />
            <h5 className="is-it-free free-soon">COMING SOON</h5>
            <h4 className="name">The Escapists</h4>
            <h5 className="free-time">Free Dec 12 - Dec 19</h5>
          </div>
        </div>
      </div>
    </section>
  );
};
