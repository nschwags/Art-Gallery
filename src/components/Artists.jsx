import "./explore.css";
import "./artists.css";
import { Link } from "react-router-dom";

function Artists() {
  const popArtists = [
    "Rembrandt",
    "Vincent van Gogh",
    "Claude Monet",
    "Paul Cézanne",
    "Edgar Degas",
    "Ralph Albert Blakelock",
    "Charles Ethan Porter",
    "Gustave Courbet",
    "Paul Gauguin",
    "Gerard David",
  ];
  return (
    <>
      <h1 className="department-title">Browse Works by Popular Artists</h1>
      <div className="artist-list">
        <ul>
          {popArtists.map((artist) => (
            <li key={artist}>
              <Link
                to={`/explore/search?q=${encodeURIComponent(artist.trim())}`}
              >
                {artist}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Artists;
