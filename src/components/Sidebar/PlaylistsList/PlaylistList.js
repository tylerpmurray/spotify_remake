import React from "react";

const PlaylistList = ({ playlists }) => {
  return (
    <ul className="playlist-scroll">
      {playlists.map((playlist) => {
        return <li>{playlist}</li>;
      })}
    </ul>
  );
};

export default PlaylistList;
