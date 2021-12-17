import backward from "../control_icons/backward.png";
import forward from "../control_icons/forward.png";
import play from "../control_icons/play.png";
import repeat from "../control_icons/repeat.png";
import shuffle from "../control_icons/shuffle.png";

const Player = () => {
  return (
    <div className="player">
      <img src={shuffle} alt="shuffle" />
      <img src={backward} alt="backward" />
      <img src={play} alt="play" />
      <img src={forward} alt="forward" />
      <img src={repeat} alt="repeat" />
    </div>
  );
};

export default Player;
