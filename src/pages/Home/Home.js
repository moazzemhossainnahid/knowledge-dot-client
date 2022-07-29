import React from "react";
import Banner from "../../Components-Nahid/HomePageSection/BannerSection/Banner";
import LimitedLearningBanner from "../../Components-Nahid/HomePageSection/LimitedLearningBanner/LimitedLearningBanner";
import PopulerCategory from "../../Components-Nahid/HomePageSection/PopulerCategory/PopulerCategory";
import PopulerCourses from "../../Components-Nahid/HomePageSection/PopulerCourses/PopulerCourses";
import ProudMemeber from "../../Components-Nahid/HomePageSection/ProudMember/ProudMemeber";

const Home = () => {
  return (
    <div>
      <Banner/>
      <PopulerCategory/>
      <PopulerCourses/>
      <LimitedLearningBanner/>
    </div>
  );
};

export default Home;
