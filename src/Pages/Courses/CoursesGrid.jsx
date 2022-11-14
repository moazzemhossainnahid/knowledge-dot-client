import { faBook, faChartColumn, faClock, faInr } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const CoursesGrid = ({ course }) => {
  // console.log(course);
  const { _id, name, thumb_img, instructor, price, rating,level } = course;
  const ratings = Math.ceil(rating?.total_rating / rating?.total_people);
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/course/${_id}`)} className="mb-8 border cursor-pointer hover:shadow-md rounded-xl">

      <div className="h-44 relative overflow-hidden rounded-xl">
        <img className="h-44 w-full relative rounded-xl hover:scale-110 duration-200" src={thumb_img} alt="Shoes" />
        {/* <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full opacity-0 hover:opacity-40 transition duration-300 ease-in-out bg-indigo-700"></div> */}
      </div>
      <div className="card-body p-0">
        <div className="flex items-center justify-between gap-2 px-4 py-2">
          <div className="flex gap-2 items-center">
            <h3 className="text-md font-semibold text-gray-400">{ratings}</h3>
            {

              ratings === 1 &&
              <div className="rating">
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" checked />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
              </div>

            }
            {

              ratings === 2 &&
              <div className="rating">
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" checked />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
              </div>

            }
            {

              ratings === 3 &&
              <div className="rating">
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" checked />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
              </div>

            }
            {

              ratings === 4 &&
              <div className="rating">
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" checked />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
              </div>

            }
            {

              ratings === 5 &&
              <div className="rating">
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" checked />
              </div>

            }
          </div>
          <h3 className="text-gray-500">(17)</h3>

        </div>
        <p className="text-xl px-4 font-header">{name}</p>
        <div className="px-4 text-md">
          <div class="card-actions flex-col mx-auto gap-3 justify-center py-5">
            <div className="flex justify-around items-center gap-2">
              <div className="flex text-sm items-center justify-center gap-1 ">
                <FontAwesomeIcon icon={faBook} />
                <h3 className="text-sm">6 Lesson</h3>
              </div>
              <div className="flex text-sm items-center justify-center gap-1 ">
                <FontAwesomeIcon icon={faClock} />
                <h3 className="text-sm">3h 56m</h3>
              </div>
              <div className="flex text-sm items-center justify-center gap-1 ">
                <FontAwesomeIcon icon={faChartColumn} />
                <h3 className="text-sm">{level}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 p-2 border-t-2 ">
          <div className="flex justify-center items-center gap-2">
            <img src={course.instructorimg} alt="" className="rounded-full w-8 h-8" />
            <h3 className="text-gray-600 text-sm font-semibold">{instructor}</h3>
          </div>
          <div className="flex justify-center items-center gap-2">
            <h3 className="text-gray-700 font-bold"> <FontAwesomeIcon icon={faInr} /> {price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesGrid;
