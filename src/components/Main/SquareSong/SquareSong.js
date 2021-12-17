import "./SquareSong.css";

const SquareSong = ({ song }) => {
  return (
    <div className="square-item">
      <img src={song.src} className="square-song" />
      <h3>{song.name}</h3>
      <p>{song.artist}</p>
    </div>
  );
};

export default SquareSong;
