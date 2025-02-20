import "./about.css";
import nullImg from "../assets/department-images/no-image.png";

function About() {
  return (
    <>
      <h1 className="page-title">Discover the World of Art</h1>
      <div className="about-container">
        <div className="section">
          <h2 className="section-title">About Us</h2>
          <div className="content-section">
            <h3>Art Without Boundries</h3>
            <p>
              Our gallery app provides a virtual gateway to explore timeless
              works of art from the comfort of your own home. With just a few
              clicks, you can traverse centuries of creativity and discover
              hidden gems from diverse cultures
            </p>
          </div>
          <div className="content-section">
            <h3>Making Art Accessible to Everyone</h3>
            <p>
              We believe art should be accessible to everyone, regardless of
              location. By leveraging the Met Museum&apos;s public API, we bring
              global art collections to your fingertips—sparking curiosity,
              encouraging learning, and fostering a deeper appreciation for art
              history.
            </p>
          </div>
        </div>
        <div className="section">
          <h2 className="section-title">How it Works</h2>
          <div className="content-section">
            <h3>Explore Art in Four Simple Steps</h3>
            <ol>
              <li>
                <span className="step">Choose a Department</span>Browse
                collections by departments
              </li>
              <li>
                <span className="step">Search by Keywords</span>Find specific
                artworks or artists
              </li>
              <li>
                <span className="step">Click to Learn More</span>Click or tap on
                any artwork to discover its history
              </li>
              <li>
                <span className="step">Enjoy the Art</span>Immerse yourself in
                the stories and beauty behind each piece
              </li>
            </ol>
          </div>
          <div className="content-section">
            <h3>Why Do Some Images Appear Missing?</h3>
            <p>
              Occasionally, you might see a placeholder image or missing
              artwork. This happens when the original source hasn&apos;t
              provided a public image or the artwork is restricted for copyright
              reasons. We&apos;re continuously working to refine our display
              logic to offer the best possible experience. In this event, you
              will notice this image instead:
            </p>
            <img src={nullImg} alt="no-image-placeholder" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
