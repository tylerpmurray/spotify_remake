import { useState } from "react";

import image2 from "../../../album_art/1255378-800w.jpeg";
import image3 from "../../../album_art/gallant-ology-big.jpeg";
import image4 from "../../../album_art/petit-biscuit-presence-big.jpeg";
import image5 from "../../../album_art/rihanna-anti-big.jpeg";
import image6 from "../../../album_art/SamSpratt_KidCudi_ManOnTheMoon3_AlbumCover_Web.jpeg";
import image7 from "../../../album_art/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpeg";
import HorizontalSong from "../HorizontalSong/HorizontalSong";

const HorizontalSongs = () => {
  const [horizontalSongs, setHorizontalSongs] = useState([
    { name: "Logic", src: image7 },
    { name: "Harry Styles", src: image2 },
    { name: "Gallant", src: image3 },
    { name: "Petit Biscuit", src: image4 },
    { name: "Rihanna", src: image5 },
    { name: "Kid Cudi", src: image6 },
  ]);
  return (
    <div className="highlights highlight-flex-containter">
      {horizontalSongs.map((song) => {
        return (
          <HorizontalSong src={song.src} alt={song.name} name={song.name} />
        );
      })}
    </div>
  );
};

export default HorizontalSongs;
