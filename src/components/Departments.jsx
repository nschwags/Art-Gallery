import "./explore.css";

// eslint-disable-next-line react/prop-types
function Departments({ title, image }) {
  return (
    <div className="department-card">
      <img src={image} alt="" />
      <h2>{title}</h2>
    </div>
  );
}

export default Departments;
