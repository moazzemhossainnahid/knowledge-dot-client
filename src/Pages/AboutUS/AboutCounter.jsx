import React from "react";
import CountUp from "react-countup";

const AboutCounter = () => {
  return (
    <div className="m-auto h-auto items-center max-w-[1240px]  ">
      <div className="grid md:grid-cols-5 grid-cols-1 mx-4 ">
        <div className="flex justify-center">
          <h1 className="text-7xl font-semibold text-slate-900">
            <CountUp end={40} duration={3} />M
            <h2 className="text-xl mt-3 font-normal flex justify-center text-slate-500">
              Students
            </h2>
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-7xl font-semibold text-slate-900">
            <CountUp end={130} duration={3} />K
            <h2 className="text-xl mt-3 font-normal flex justify-center text-slate-500">
              Course
            </h2>
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-7xl font-semibold text-slate-900">
            <CountUp end={50} duration={3} />k
            <h2 className="text-xl mt-3 font-normal flex justify-center text-slate-500">
              Instructors
            </h2>
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-7xl font-semibold text-slate-900">
            <CountUp end={65} duration={3} />M
            <h2 className="text-xl mt-3 font-normal flex justify-center text-slate-500">
              Course enrolments
            </h2>
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-7xl font-semibold text-slate-900">
            <CountUp end={30} duration={3} />+
            <h2 className="text-xl mt-3 font-normal flex justify-center text-slate-500">
              Languages
            </h2>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutCounter;
