import "./art.css";
import nullImg from "../assets/department-images/no-image.png";

// eslint-disable-next-line react/prop-types
function Art({ title, artist, image, begin, end, onClick }) {
  const formatYear = (year) => {
    if (year < 0) {
      return `${Math.abs(year)}BC`;
    }
    return year;
  };

  return (
    <div className="art-card" onClick={onClick}>
      <img
        src={image}
        alt=""
        onError={(e) => {
          e.target.onError = null;
          e.target.src = nullImg;
        }}
      />
      <div className="art-desc">
        <h2>{title}</h2>
        <h3>{artist}</h3>
        <i>
          {formatYear(begin) == formatYear(end)
            ? formatYear(begin)
            : `${formatYear(begin)} - ${formatYear(end)}`}
        </i>
      </div>
    </div>
  );
}

export default Art;
