import React from "react";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";

import RupiSymple from "./RupiSymple";

const CheckoutCourseDetails = ({ course }) => {
  const ratings = Math.ceil(
    course?.rating?.total_rating / course?.rating?.total_people
  );
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
  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };
  console.log(course);
  return (
    <div className=" relative">
      <div className="border sticky top-20 px-4   shadow-lg rounded-sm">
        <div className="py-4 ">
          <h3 className="text-2xl text-black text-opacity-90 ">
            Booking Summary :
          </h3>
          <h2 className="text-lg text-semibold text-gray-600 flex items-center gap-x-2">
            <AiOutlineArrowRight />
            {course?.name}
          </h2>
        </div>
        <hr />
        <div>
          <div className="flex justify-start  py-5 gap-5">
            <div class="avatar">
              <div class="w-24 rounded">
                <img src={course?.instructorimg} alt="dd" />
              </div>
            </div>
            <div className="flex flex-col justify-around">
              <h1>{course?.instructor}</h1>

              {/* Rating add  */}
              <div className="flex gap-2 items-center">
                {ratings === 1 && (
                  <div className="rating">
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-green-500"
                      checked
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-gray-300"
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-gray-300"
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-gray-300"
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-gray-300"
                    />
                  </div>
                )}
                {ratings === 2 && (
                  <div className="rating">
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-green-500"
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-green-500"
                      checked
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-gray-300"
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-gray-300"
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-gray-300"
                    />
                  </div>
                )}
                {ratings === 3 && (
                  <div className="rating">
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-green-500"
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-green-500"
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-green-500"
                      checked
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-gray-300"
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-gray-300"
                    />
                  </div>
                )}
                {ratings === 4 && (
                  <div className="rating">
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-green-500"
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-green-500"
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-green-500"
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-green-500"
                      checked
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-gray-300"
                    />
                  </div>
                )}
                {ratings === 5 && (
                  <div className="rating">
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-green-500"
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-green-500"
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-green-500"
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-green-500"
                    />
                    <input
                      name="rating-1"
                      className="mask mask-star w-4 md:w-4  bg-green-500"
                      checked
                    />
                  </div>
                )}
                <h3 className="text-md font-semibold text-gray-400">
                  {course?.rating?.total_rating}
                </h3>
              </div>
              <div className="flex items-center gap-x-2">
                <MdLocationPin className="text-xl text-gray-800  " />
                <span>Dhaka Bangladesh</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-lg text-black text-opacity-90  my-2">
              <p>Date</p>
              <p>
                {new Date().getDate()} {month} {new Date().getFullYear()}
              </p>
            </div>
            <div className="flex justify-between text-lg text-black text-opacity-90  my-2">
              <p>Time</p>
              <p>{formatAMPM(new Date())}</p>
            </div>
            <div className="flex justify-between text-lg text-black text-opacity-90  my-2">
              <p>Course Fee</p>
              <p>
                <RupiSymple /> {course?.price}
              </p>
            </div>
            <div className="flex justify-between text-lg text-black text-opacity-90  my-2">
              <p>Booking Fee</p>
              <p>
                <RupiSymple /> 100
              </p>
            </div>
            <div className="flex justify-between text-lg text-black text-opacity-90  my-2">
              <p>Video Calling</p>
              <p>
                <RupiSymple /> 200
              </p>
            </div>
            <div className="py-5">
              <hr />
            </div>
            <div className="flex justify-between text-lg text-black text-opacity-90  my-2 mb-10">
              <p className="text-xl font-semibold ">Total</p>
              <p className="text-xl font-semibold ">
                = <RupiSymple /> {course?.price + 100 + 200}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCourseDetails;
