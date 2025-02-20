import { Link } from "react-router-dom";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Bringing the magic of the art world to your fingertips. Exoplore
            endless works of art from the comfort of your own home. Immerse
            yourself in a world of beauty.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/artists">Artists</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
              Facebook
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
              Twitter
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
              Instagram
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SchwagDev. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
