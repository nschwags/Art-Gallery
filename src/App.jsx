import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Explore from "./components/Explore";
import ExploreDept from "./components/ExploreDept";
import Artists from "./components/Artists";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/explore/:departmentId" element={<ExploreDept />}></Route>
        <Route path="/artists" element={<Artists />}></Route>
        <Route path="/explore/search" element={<ExploreDept />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
