import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
<<<<<<< HEAD
import About from "./pages/About/About";
import SingleCourse from "./Components-Nahid/SingleCourse/SingleCourse";
import Overview from "./Components-Nahid/SingleCourse/nestedTabPage/Overview";
import Curriculum from "./Components-Nahid/SingleCourse/nestedTabPage/Curriculum";
import Instructor from "./Components-Nahid/SingleCourse/nestedTabPage/Instructor";
import Reviews from "./Components-Nahid/SingleCourse/nestedTabPage/Reviews";
=======
import Navbar from "./pages/SharedPages/Navbar";
import Contact from './component-1/Contact/Contact';
import Instructors from "./component-I/Instructors/Instructors";
>>>>>>> main

function App() {
  return (
    <div className="text-blue-500">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<SingleCourse />} >
                <Route path="overview" element={<Overview/>}/>
                <Route path="curriculum" element={<Curriculum/>}/>
                <Route path="instructor" element={<Instructor/>}/>
                <Route path="reviews" element={<Reviews/>}/>
        </Route>
=======
        <Route path="/contact" element={<Contact />} />
        <Route path="/instructors" element={<Instructors />} />
>>>>>>> main
      </Routes>
    </div>
  );
}

export default App;
