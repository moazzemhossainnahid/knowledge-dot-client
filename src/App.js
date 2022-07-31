import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SingleCourse from "./Components-Nahid/SingleCourse/SingleCourse";
import Overview from "./Components-Nahid/SingleCourse/nestedTabPage/Overview";
import Curriculum from "./Components-Nahid/SingleCourse/nestedTabPage/Curriculum";
import Instructor from "./Components-Nahid/SingleCourse/nestedTabPage/Instructor";
import Reviews from "./Components-Nahid/SingleCourse/nestedTabPage/Reviews";
import Navbar from "./pages/SharedPages/Navbar";
import Contact from './component-1/Contact/Contact';
import Instructors from "./component-I/Instructors/Instructors";
import Login from "./pages/Authentication/Login/Login";
import Register from "./pages/Authentication/Register/Register";
import BecomeInstructor from "./component-I/Instructors/BecomeInstructor";
import LeftSideMenu from "./Components-Nahid/LeftSideMenu/LeftSideMenu";


function App() {
  return (
    <div className="text-gray-700">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<SingleCourse />} >
          <Route path="overview" element={<Overview />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="instructor" element={<Instructor />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/leftmenu" element={<LeftSideMenu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/becomeinstructor" element={<BecomeInstructor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div> 
  );
}

export default App;
