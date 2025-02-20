/* eslint-disable react/prop-types */
import "./artOverlay.css";

const ArtOverlay = ({ artwork, onClose }) => {
  if (!artwork) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        <div className="image-content">
          <img src={artwork.primaryImage} alt={artwork.title} />
          <h2>{artwork.title}</h2>
        </div>
        <div className="image-desc">
          <p>
            <strong>Artist:</strong> {artwork.artistDisplayName || "Unknown"}
          </p>
          <p>
            <strong>Date:</strong> {artwork.objectDate || "N/A"}
          </p>
          <p>
            <strong>Medium:</strong> {artwork.medium || "N/A"}
          </p>
          <p>
            <strong>Dimensions:</strong> {artwork.dimensions || "N/A"}
          </p>
          <p>
            <strong>Credit Line:</strong> {artwork.creditLine || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtOverlay;
