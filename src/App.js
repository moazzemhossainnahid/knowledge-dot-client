import { Route, Routes } from "react-router-dom";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Pages/Home/Home";
import MessengerCustomerChat from "react-messenger-customer-chat";
import LeftSideMenu from "./Components/Components-Nahid/LeftSideMenu/LeftSideMenu";
import Curriculum from "./Components/Components-Nahid/SingleCourse/nestedTabPage/Curriculum";
import Instructor from "./Components/Components-Nahid/SingleCourse/nestedTabPage/Instructor";
import Overview from "./Components/Components-Nahid/SingleCourse/nestedTabPage/Overview";
import Reviews from "./Components/Components-Nahid/SingleCourse/nestedTabPage/Reviews";
import About from "./Pages/AboutUS/About";
import SignIn from "./Pages/Authentication/SignIn/Signin";
import SignUp from "./Pages/Authentication/SignUp/Signup";
import Contact from "./Pages/ContactUS/Contact";
import Courses from "./Pages/Courses/Courses";
import SingleCourse from "./Pages/Courses/SingleCourse/SingleCourse";
import BecomeInstructor from "./Pages/Instructors/BecomeInstructor";
import Instructors from "./Pages/Instructors/Instructors";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/SharedPages/Footer/Footer";
import Navbar from "./Pages/SharedPages/Header/Navbar";
import ForgetPassword from "./Pages/Authentication/SignIn/ForgetPassword";
import Checkout from "./Pages/Checkout/Checkout";
import Profile from "./Pages/Profile/Profile";
import BookingSuccess from "./Pages/Checkout/BookingSuccess";
import ProfileData from "./Pages/Profile/ProfileData";
import UpdateProfile from "./Pages/Profile/UpdateProfile";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:category" element={<Courses />} />
          <Route path="/course/:id" element={<SingleCourse />}>
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
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/booking/:id" element={<BookingSuccess />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile" element={<Profile />} >
            <Route index element={<ProfileData></ProfileData>}></Route>
            <Route path="/profile/update" element={<UpdateProfile></UpdateProfile>}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <MessengerCustomerChat
          pageId="100087757433830"
          appId="2444817992323671"
        />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
