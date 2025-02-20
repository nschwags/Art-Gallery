import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleSearch = () => {
    const query = searchRef.current.value.trim();
    navigate(
      query ? `/explore/search?q=${encodeURIComponent(query)}` : "/explore"
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className="nav-bar">
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/explore" onClick={handleMenuClose}>
          Explore
        </Link>
        <Link to="/artists" onClick={handleMenuClose}>
          Artists
        </Link>
        <Link to="/about" onClick={handleMenuClose}>
          About
        </Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="search-item"
          placeholder="Search.."
          ref={searchRef}
          onKeyDown={handleKeyDown}
        ></input>
        <button type="submit" className="search-button" onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div
        className={`ham-menu ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Navbar;
