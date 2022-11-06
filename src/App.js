import { Route, Routes } from "react-router-dom";
import "./App.css";
import LeftSideMenu from "./Components/Components-Nahid/LeftSideMenu/LeftSideMenu";
import Curriculum from "./Components/Components-Nahid/SingleCourse/nestedTabPage/Curriculum";
import Instructor from "./Components/Components-Nahid/SingleCourse/nestedTabPage/Instructor";
import Overview from "./Components/Components-Nahid/SingleCourse/nestedTabPage/Overview";
import Reviews from "./Components/Components-Nahid/SingleCourse/nestedTabPage/Reviews";
import Checkout from "./Pages/Checkout/Checkout";
import SignIn from "./Pages/Authentication/SignIn/signin";
import SignUp from "./Pages/Authentication/SignUp/signup";
import Contact from "./Pages/ContactUS/Contact";
import SingleCourse from "./Pages/Courses/SingleCourse/SingleCourse";
import Home from "./Pages/Home/Home";
import BecomeInstructor from "./Pages/Instructors/BecomeInstructor";
import Instructors from "./Pages/Instructors/Instructors";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/SharedPages/Footer/Footer";
import Navbar from "./Pages/SharedPages/Header/Navbar";
import Courses from "./Pages/Courses/Courses";
import About from "./Pages/AboutUS/About";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course" element={<SingleCourse />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="curriculum" element={<Curriculum />} />
            <Route path="instructor" element={<Instructor />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/becomeinstructor" element={<BecomeInstructor />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/leftmenu" element={<LeftSideMenu />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
