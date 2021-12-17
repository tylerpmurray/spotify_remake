import album from "../control_icons/album.png";
import like from "../control_icons/like.png";
import currentSong from "../../../album_art/petit-biscuit-presence-big.jpeg";

const AlbumArt = () => {
  return (
    <div className="control-bar-left">
      <img className="current-song" src={currentSong} alt="current-song" />
      <h1>Current Song</h1>
      <h3>Current Artist</h3>
      <div className="album-art">
        <img src={like} alt="like" />
        <img src={album} alt="album" />
      </div>
    </div>
  );
};

export default AlbumArt;
