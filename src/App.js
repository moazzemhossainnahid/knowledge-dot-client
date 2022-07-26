import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./pages/SharedPages/Navbar";
import Contact from './component-1/Contact/Contact';
import Instructors from "./component-I/Instructors/Instructors";

function App() {
  return (
    <div className="text-blue-500">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/instructors" element={<Instructors />} />
      </Routes>
    </div>
  );
}

export default App;
