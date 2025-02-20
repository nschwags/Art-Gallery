import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import Art from "./Art";
import "./explore.css";
import nullImg from "../assets/department-images/no-image.png";
import ArtOverlay from "./ArtOverlay";
import SkeletonArt from "./SkeletonArt";
import Loading from "./Loading";

function ExploreDept() {
  const { departmentId } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const displayName = params.get("displayName");
  const searchQuery = params.get("q");
  const [objectsData, setObjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 30;
  const [selectedArt, setSelectedArt] = useState(null);

  useEffect(() => {
    const fetchObjectsData = async () => {
      if (!departmentId && !searchQuery) return;

      setLoading(true);

      try {
        const queryParams = new URLSearchParams({
          page: currentPage,
          limit: itemsPerPage,
        });
        if (departmentId) queryParams.append("departmentId", departmentId);
        if (searchQuery) queryParams.append("q", searchQuery);

        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/api/artworks?${queryParams}`
        );

        setObjectsData(data.artworks || []);
        setTotalPages(Math.ceil(data.total / itemsPerPage));
      } catch (error) {
        console.error("Error fetching artwork data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchObjectsData();
  }, [currentPage, departmentId, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [departmentId, searchQuery]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, departmentId, searchQuery]);

  useEffect(() => {
    const queryParams = new URLSearchParams({
      page: currentPage,
      limit: itemsPerPage,
    });
    if (departmentId) queryParams.append("departmentId", departmentId);
    if (searchQuery) queryParams.append("q", searchQuery);
    console.log(
      `Fetching from /api/artworks?${queryParams} using page ${currentPage}`
    );
  }, [currentPage, departmentId, searchQuery]);

  const handleArtClick = (art) => {
    setSelectedArt(art);
  };

  const closeOverlay = () => {
    setSelectedArt(null);
  };

  if (loading)
    return (
      <div className="skeleton-list">
        {Array.from({ length: itemsPerPage }, (_, index) => (
          <SkeletonArt key={index} />
        ))}
        <Loading />
      </div>
    );

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  console.log(objectsData);

  return (
    <div>
      <h1 className="department-title">
        {displayName ? displayName : `Art containing: "${searchQuery}"`}
      </h1>
      {objectsData.length > 0 && (
        <div className="pagination">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            style={{ marginRight: "10px" }}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            style={{ marginLeft: "10px" }}
          >
            Next
          </button>
        </div>
      )}
      <div className="art-list">
        {objectsData && objectsData.length > 0 ? (
          objectsData.map((object) => (
            <Art
              key={object.objectID}
              title={object.title}
              artist={object.artistDisplayName}
              image={
                object.primaryImage?.trim() ||
                object.primaryImageSmall?.trim() ||
                nullImg
              }
              begin={object.objectBeginDate}
              end={object.objectEndDate}
              id={object.objectID}
              onClick={() => handleArtClick(object)}
            />
          ))
        ) : (
          <p>No objects found in this department.</p>
        )}
      </div>
      {objectsData.length > 0 && (
        <div className="pagination">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            style={{ marginRight: "10px" }}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            style={{ marginLeft: "10px" }}
          >
            Next
          </button>
        </div>
      )}
      <ArtOverlay artwork={selectedArt} onClose={closeOverlay} />
    </div>
  );
}

export default ExploreDept;
