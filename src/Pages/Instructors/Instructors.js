import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import BestInstructor from "./BestInstructor";
import GeneralTeacher from "./GeneralTeacher";
import InstructorCarousel from "./InstructorCarousel";
import BaseURL from "../../Hooks/BaseURL";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    BaseURL
      .get(
        "/api/v1/instructors"
      )
      .then((data) => setInstructors(data.data));
  }, []);
  console.log(instructors);

  const navigate = useNavigate();
  return (
    <div className="w-full mx-auto py-20  text-slate-800 mb-20">
      <div className="text-center mb-20">
        <div>
          <h1 className="te mb-5 text-4xl md:text-5xl font-bold">
            The Best Tutors
          </h1>
          <p className="mb-5 text-2xl lg:w-[780px] mx-auto text-justify">
            Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque,
            facilisis vel mollis vitae, mollis nec ante. Quisque aliquam dictum
            condim.
          </p>
        </div>
      </div>
      <div></div>
      {/* Best Instructor Page */}
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full mb-20">
        {instructors.map((instructor) => {
          if (instructor.teacherCategory == "best") {
            return <BestInstructor instructor={instructor}></BestInstructor>;
          }
        })}
      </div>

      <div className="text-center mb-20">
        <h1 className="text-slate-800 mb-5 text-4xl md:text-5xl font-bold lg:w-[820px] mx-auto">
          A world class education for anyone, anywhere. 100% free
        </h1>
      </div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 sm:gap-16 md:gap-8 my-12 text-center">
        <div className="p-10 rounden dark:text-slate-200">
          <div className="h-40 w-40 m-auto">
            <img
              src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/09/icon_plan_course.png?"
              alt="t"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">1. Plan your course</h1>
            <p className="text-sm  my-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>
        <div className="p-10 rounden dark:text-slate-200">
          <div className="h-40 w-40 m-auto">
            <img
              src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/09/icon_record_video.png?"
              alt="t"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">2. Record your video</h1>
            <p className="text-sm  my-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>
        <div className="p-10 rounden dark:text-slate-200">
          <div className="h-40 w-40 m-auto">
            <img
              src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/09/icon_community.png?"
              alt="t"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">3. Build your community</h1>
            <p className="text-sm  my-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="hero text-center font-thin mt-16 mb-20">
        <div class="flex lg:flex-row sm:flex-col md:flex-row w-full">
          <div class="stat justify-items-center">
            <div className="flex flex-row">
              <CountUp className="text-6xl font-bold" end={40} />
              <h1 className="text-6xl font-bold">M</h1>
            </div>
            <div class="stat-desc text-2xl">Students</div>
          </div>
          <div class="stat justify-items-center">
            <div className="flex flex-row">
              <CountUp className="text-6xl font-bold" end={130} />
              <h1 className="text-6xl font-bold">K</h1>
            </div>
            <div class="stat-desc  text-2xl">Courses</div>
          </div>
          <div class="stat justify-items-center">
            <div className="flex flex-row">
              <CountUp className="text-6xl font-bold" end={50} />
              <h1 className="text-6xl font-bold">K</h1>
            </div>
            <div class="stat-desc  text-2xl">Instructors</div>
          </div>
          <div class="stat justify-items-center">
            <div className="flex flex-row">
              <CountUp className="text-6xl font-bold" end={65} />
              <h1 className="text-6xl font-bold">M</h1>
            </div>
            <div class="stat-desc  text-2xl">Course Enrolments</div>
          </div>
          <div class="stat justify-items-center">
            <div className="flex flex-row">
              <CountUp className="text-6xl font-bold" end={30} />
              <h1 className="text-6xl font-bold">+</h1>
            </div>
            <div class="stat-desc  text-2xl">Languages</div>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <InstructorCarousel />

      <div className="mt-28 ml-10">
        <div className="flex flex-col items-center ">
          <h3 className="text-4xl md:text-5xl font-bold text-left ">
            Meet Professionals
          </h3>
          <div className="w-[100px] h-[4px] bg-[#f82525] relative mt-5">
            <div className="radiant bg-[#FFFFFF]"></div>
          </div>
          <div>
            <p className="mb-5 text-2xl max-w-3xl text-center">
              Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque,
              facilisis vel mollis vitae, mollis nec ante. Quisque aliquam
              dictum condim.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 sm:gap-16 md:gap-8 my-12 mt-20 ">
          {instructors.map((instructor) => {
            if (instructor.teacherCategory == "normal") {
              return <GeneralTeacher instructor={instructor}></GeneralTeacher>;
            }
          })}
        </div>
      </div>

      <div
        className="hero relative"
        style={{
          backgroundImage:
            "url(https://edubee.radiantthemes.com/wp-content/uploads/2021/05/become-inst-img-1.jpg)",
          height: "420px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="card-body tracking-wide lg:w-2/4 md:w-3/4 w-full sm:bottom-5 right-0 absolute">
          <h2 className="text-primary font-semibold">
            Upskill Your Team With World-Class Learning{" "}
          </h2>
          <h2 class="card-title">Become An Instructor Today!</h2>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan. Risus commp
            commodo lora viverra adipiscing elit. Ut elit tellus,
          </p>
          <div className="card-actions">
            <button
              onClick={() => navigate(`/becomeinstructor`)}
              className="btn btn-primary"
            >
              Become an Instructor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
