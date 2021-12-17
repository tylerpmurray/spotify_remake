import SquareSong from "../SquareSong/SquareSong";
import { useState } from "react";
import image2 from "../../../album_art/1255378-800w.jpeg";
import image3 from "../../../album_art/gallant-ology-big.jpeg";
import image4 from "../../../album_art/petit-biscuit-presence-big.jpeg";
import image5 from "../../../album_art/rihanna-anti-big.jpeg";
import image6 from "../../../album_art/SamSpratt_KidCudi_ManOnTheMoon3_AlbumCover_Web.jpeg";
import image7 from "../../../album_art/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpeg";
import "./SquareSongs.css";

const SquareSongs = () => {
  const [squareSongList, setSquareSongList] = useState([
    { src: image2, name: "song 1", artist: "artist 1" },
    { src: image3, name: "song 1", artist: "artist 1" },
    { src: image4, name: "song 1", artist: "artist 1" },
    { src: image5, name: "song 1", artist: "artist 1" },
    { src: image6, name: "song 1", artist: "artist 1" },
    { src: image7, name: "song 1", artist: "artist 1" },
  ]);

  return (
    <div>
      <h1>Your Shows</h1>
      <div className="square-container">
        {squareSongList.map((song) => {
          return <SquareSong song={song} />;
        })}
      </div>
    </div>
  );
};

export default SquareSongs;
