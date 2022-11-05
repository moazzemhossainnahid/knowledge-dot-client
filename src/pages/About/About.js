import React from "react";
import AboutCounter from "./AboutCounter";
import AboutHead from "./AboutHead";
import LearningContent from "./LearningContent";
import OurMission from "./OurMission";
const About = () => {
  return (
    <div className="bg-white">
       {/* <AboutHero /> */}
       <AboutHead />
       <LearningContent />
       <AboutCounter />
       <OurMission />
    </div>
  );
};

export default About;
