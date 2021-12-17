import HorizontalSongs from "./HorizontalSongs/HorizontalSongs";
import SquareSongs from "./SquareSongs/SquareSongs";
import arrowLeft from "../../icons/back_arrow_edit1.png";
import arrowRight from "../../icons/forward_arrow.png";
import "../Main/Main.css";

const Main = () => {
  return (
    <div className="main flex-item">
      <header>
        <div className="navigation">
          <header className="arrow-flex-container">
            <img className="arrows" src={arrowLeft} alt="arrowleft"></img>
            <img className="arrows" src={arrowRight} alt="arrowright"></img>
            <div className="profile">Tyler Murray</div>
          </header>
          <div className="greeting-bar">
            <h1 className="greeting">Good afternoon</h1>
          </div>
          <HorizontalSongs />
        </div>
      </header>
      <SquareSongs />
    </div>
  );
};

export default Main;
