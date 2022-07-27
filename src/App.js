import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./pages/SharedPages/Navbar";
import Login from "./pages/Authentication/Login/Login";
import Register from "./pages/Authentication/Register/Register";

function App() {
  return (
    <div className="text-blue-500">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
