import React from "react";
import AboutCounter from "./AboutCounter";
import AboutHero from "./AboutHero";
import AboutLearning from "./AboutLearning";
import AboutMission from "./AboutMission";
import AboutSlide from "./AboutSlide";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutLearning />
      <AboutCounter />
      <AboutMission />
      <AboutSlide />
    </div>
  );
};

export default About;
