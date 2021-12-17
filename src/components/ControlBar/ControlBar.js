
import "./ControlBar.css";
import AlbumArt from "./AlbumArt/AlbumArt";
import Player from "./Player/Player";
import ExtraControls from "./ExtraControls/ExtraControls";

const ControlBar = () => {
  return (
    <div className="control-bar">
      <AlbumArt />
      <Player />
      <ExtraControls />
    </div>
  );
};

export default ControlBar;
