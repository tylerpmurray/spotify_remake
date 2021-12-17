import "./HorizontalSong.css";

const HorizontalSong = ({ src, alt, name, onClick }) => {
  return (
    <div className="horizontal-song">
      <img className="image" src={src} alt={alt} />
      <p>{name}</p>
    </div>
  );
};

export default HorizontalSong;
