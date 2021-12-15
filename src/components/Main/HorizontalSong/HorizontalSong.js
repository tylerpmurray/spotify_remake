const HorizontalSong = ({ src, alt, name }) => {
  return (
    <div className="horizontal-song">
      <img className="image" src={src} alt={alt} />
      <p>{name}</p>
    </div>
  );
};

export default HorizontalSong;
