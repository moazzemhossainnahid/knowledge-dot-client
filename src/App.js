import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/SharedPages/Header/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
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
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </div>
  );
}

export default App;
