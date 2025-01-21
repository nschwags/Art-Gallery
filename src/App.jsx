import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Exhibitions from "./components/Exhibitions";
import Explore from "./components/Explore";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="exhibitions" element={<Exhibitions />}></Route>
        <Route path="explore" element={<Explore />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
