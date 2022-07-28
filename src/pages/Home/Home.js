import React from "react";
import Banner from "../../Components-Nahid/HomePageSection/BannerSection/Banner";
import LimitedLearningBanner from "../../Components-Nahid/HomePageSection/LimitedLearningBanner/LimitedLearningBanner";
import PopulerCourses from "../../Components-Nahid/HomePageSection/PopulerCourses/PopulerCourses";
import ProudMemeber from "../../Components-Nahid/HomePageSection/ProudMember/ProudMemeber";

const Home = () => {
  return (
    <div>
      <Banner/>
      <PopulerCourses/>
      <LimitedLearningBanner/>
      <ProudMemeber/>
    </div>
  );
};

export default Home;
