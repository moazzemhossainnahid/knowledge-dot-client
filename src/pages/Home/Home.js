import React from "react";
import Footer from "../../Components-Nahid/Footer/Footer";
import Banner from "../../Components-Nahid/HomePageSection/BannerSection/Banner";
import LimitedLearningBanner from "../../Components-Nahid/HomePageSection/LimitedLearningBanner/LimitedLearningBanner";
import PopulerCategory from "../../Components-Nahid/HomePageSection/PopulerCategory/PopulerCategory";
import PopulerCourses from "../../Components-Nahid/HomePageSection/PopulerCourses/PopulerCourses";
import UpcomingEvent from "../../Components-Nahid/HomePageSection/UpcommingEvents/UpcomingEvent";

const Home = () => {
  return (
    <div>
      <Banner/>
      <PopulerCategory/>
      <PopulerCourses/>
      <UpcomingEvent/>
      <LimitedLearningBanner/>
      <Footer/>
    </div>
  );
};

export default Home;
