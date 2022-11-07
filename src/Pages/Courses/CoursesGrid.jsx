import React from "react";

const CoursesGrid = ({ course }) => {
  const { name, img } = course;
  return (
    <div className="mb-8 lg:w-11/12">

      <div className="h-44 relative overflow-hidden rounded-xl">
        <img className="h-44 w-full relative rounded-xl hover:scale-110 duration-200" src={img} alt="Shoes" />
        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full opacity-0 hover:opacity-40 transition duration-300 ease-in-out bg-indigo-700"></div>
      </div>
      <div className="card-body p-0">
        <div className="flex items-center justify-between gap-2 px-4 py-2">
          <div className="flex gap-2 items-center">
            <h3 className="text-md font-semibold text-gray-400">{course.ratings}.5</h3>
            {

              course?.ratings === 1 &&
              <div className="rating">
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" checked />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
              </div>

            }
            {

              course?.ratings === 2 &&
              <div className="rating">
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" checked />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
              </div>

            }
            {

              course?.ratings === 3 &&
              <div className="rating">
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" checked />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
              </div>

            }
            {

              course?.ratings === 4 &&
              <div className="rating">
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" checked />
                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
              </div>

            }
            {

              course?.ratings === 5 &&
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
          <p>
            <i className="fa-solid text-red-400 fa-house-signal"></i> Live
            classes, with model tests
          </p>
          <p>
            <i className="fa-solid text-primary fa-circle-play"></i> Recorded
            Videos
          </p>
        </div>
        <button className="border-t text-primary border-neutral p-2 text-lg">
          Enroll Course
        </button>
      </div>
    </div>
  );
};

export default CoursesGrid;
