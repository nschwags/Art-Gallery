import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="nav-links">
        <Link to="/exhibitions">Exhibitions</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/artists">Artists</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="search-item"
          placeholder="Search.."
        ></input>
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
