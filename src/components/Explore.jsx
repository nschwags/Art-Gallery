import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Departments from "./Departments";
import "./explore.css";

// Dynamically import all department images
const imagesContext = import.meta.glob(
  "/src/assets/department-images/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

// Create a mapping of departmentId to resolved image URLs
const departmentImages = Object.keys(imagesContext).reduce((images, path) => {
  const match = path.match(/department-(\d+)\./); // Extract department ID from file name
  if (match) {
    const departmentId = match[1];
    images[departmentId] = imagesContext[path].default; // Resolved image URL
  }
  return images;
}, {});

function Explore() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/api/departments`
        );
        const departmentsData = response.data.departments;

        // Add images to department data
        const departmentsWithImages = departmentsData.map((department) => ({
          ...department,
          image: departmentImages[department.departmentId] || "", // Fallback image
        }));

        setDepartments(departmentsWithImages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDepartments();
  }, []);

  return (
    <>
      <h1 className="department-title">Explore by Department</h1>
      <div className="department-list">
        {departments.map((department) => (
          <Link
            key={department.departmentId}
            to={`/explore/${
              department.departmentId
            }?displayName=${encodeURIComponent(department.displayName)}`}
          >
            <Departments
              title={department.displayName}
              image={department.image}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Explore;
