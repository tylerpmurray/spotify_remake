import HorizontalSongs from "./HorizontalSongs/HorizontalSongs";

const Main = () => {
  return (
    <div className="main flex-item">
      <header>
        <div className="navigation">
          <header className="arrow-flex-container">
            <div className="arrows">ARROW</div>
            <div className="profile">Tyler Murray</div>
          </header>
          <div className="greeting-bar">
            <div className="greeting">Good afternoon</div>
          </div>
          <HorizontalSongs />
        </div>
      </header>
    </div>
  );
};

export default Main;
