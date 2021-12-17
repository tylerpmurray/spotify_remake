import logo from "../../icons/Spotify_Logo_RGB_White.png";
import likedSongs from "../../icons/liked_songs.jpeg";
import addPlaylist from "../../icons/add_playlist_solid.png";
import episodes from "../../icons/episodes.png";
import home from "../../icons/home_white.png";
import search from "../../icons/search_white.png";
import library from "../../icons/library_white.png";
import install from "../../icons/install.png";
import PlaylistList from "./PlaylistsList/PlaylistList";
import { useState } from "react";
import "../Sidebar/Sidebar.css";

const Sidebar = () => {
  const [playlists, setPlaylists] = useState([
    "playlist1",
    "playlist2",
    "playlist3",
  ]);

  const createPlaylist = () => {
    const addedPlaylist = window.prompt("Add New Playlist");
    setPlaylists((prevState) => {
      return [...prevState, addedPlaylist];
    });
  };

  return (
    <div className="side-bar flex-item">
      <img className="logo" src={logo} />

      <ul className="home-buttons">
        <li>
          <img alt="home" src={home} className="top-three" />
          <p>Home</p>
        </li>
        <li>
          <img alt="home" src={search} className="top-three" />
          <p>Search</p>
        </li>
        <li>
          <img alt="home" src={library} className="top-three" />
          <p>Your Library</p>
        </li>
      </ul>
      <ul className="playlist-hightlight">
        <li onClick={createPlaylist}>
          <img
            src={addPlaylist}
            style={{ backgroundColor: "white" }}
            alt="Create Playlist"
          />
          <p>Create Playlist</p>
        </li>
        <li>
          <img src={likedSongs} alt="Liked Songs" />
          <p>Liked Songs</p>
        </li>
        <li>
          <img src={episodes} alt="Your Episodes" />
          <p>Your Episodes</p>
        </li>
      </ul>
      <hr />
      <PlaylistList playlists={playlists} />
      <div className="install-app">
        <img className="image" src={install} alt="Install" />
        <p>Install App</p>
      </div>
    </div>
  );
};

export default Sidebar;
