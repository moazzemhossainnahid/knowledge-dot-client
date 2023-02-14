import React from "react";
import { useParams } from "react-router-dom";
import useCourses from "../../Apis/useCourses";
import { FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BookingSuccess = () => {
  const { id } = useParams();
  const { Courses } = useCourses();
  const course = Courses?.find((course) => course?._id === id);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[new Date().getMonth()];
  return (
    <div className="flex justify-center items-center md:py-20 sm:py-10">
      <div className="max-w-2xl border shadow-lg rounded-sm md:py-16 lg:px-20 sm:px-3">
        <div className="flex justify-center ">
          <FaCheckCircle className="text-7xl text-success" />
        </div>
        <h2 className="text-3xl py-5 text-center">
          You'r Successfully booked Of
        </h2>
        <p className="max-w-sm text-lg mx-auto text-center mb-5">
          {" "}
          <b>{course?.name} </b>
          at <b>{course?.instructor} </b> on {new Date().getDate()} {month}{" "}
          {new Date().getFullYear()} 5:00PM to 6:00PM
        </p>
        <div className="flex justify-center">
          <button className="btn btn-success">
            <NavLink to="/">Back To Home!</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
