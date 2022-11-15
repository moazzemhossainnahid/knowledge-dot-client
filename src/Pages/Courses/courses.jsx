import React from "react";
import { Outlet } from "react-router-dom";
import useCourses from "../../Apis/useCourses";
import Sidebar from "../../Components/Components-Nahid/Sidebars/CoursesSidebar";
import CoursesGrid from "./CoursesGrid";

const Courses = () => {

const {Courses} = useCourses();


  return (
    <div className="">
      <div className="py-5">
        <h3 className="text-4xl font-bold text-center py-4">
          User Interface Courses
        </h3>
        <p className="text-center text-xl">Building the Future</p>
      </div>
      <div className="">
        <div className="bg-base-100">
          <div className="container mx-auto py-10">
            <div className="grid grid-cols-1 relative lg:gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
              <div className="col-span-1">
                <div className="sticky top-20">
                  <aside>
                    <div className="md:mb-3 pb-10">
                      <Sidebar />
                    </div>
                  </aside>
                </div>
              </div>
              <div className="col-span-3">
                <Outlet />
                <div className="flex flex-col md:flex-row justify-between items-center gap-2 py-5">
                  <h3 className="text-gray-400 font-bold">Showing <span className="text-gray-500">{Courses?.length}</span> Total Results.</h3>
                  <div className="flex justify-between items-center gap-2 px-7">
                    <h3 className="text-gray-700 font-bold">Sort By:</h3>
                    <select className="select bg-gray-300 max-w-xs">
                      <option disabled selected>Select Course</option>
                      <option>Web Development</option>
                      <option>Graphics Design</option>
                      <option>Wordpress Design</option>
                      <option>Spoken English</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {Courses?.length &&
                    Courses.map((data, index) => (
                      <CoursesGrid course={data} key={index} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
