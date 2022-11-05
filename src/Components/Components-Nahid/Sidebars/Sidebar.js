import React from "react";
import ReactStars from "react-rating-stars-component";
import { AllCoursesData } from "../Data/CoursesData";
const Sidebar = ({
  handleSearchFiltering,
  handleFilterNum,
}) => {
  return (
    <div className=" bh-white px-4 pb-6 mt-3 shadow-lg border rounded-md overflow-hidden">
      <div className="divide-y divide-gray-200 space-y-5">
        <div>
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-bold pt-5">
            Find Course
          </h3>

          <div className="flex items-center">
            <form className="w-full space-y-5">
              <input
                onChange={handleSearchFiltering}
                className="shadow appearance-none rounded w-full py-3 px-3
                   text-gray-700 leading-tight border border-slate-300 
                   focus:outline-none focus:border-red-400 focus:ring-1
                    focus:ring-red-400 "
                name="city"
                type="text"
                placeholder="Destination, City"
              />
              <select
                onChange={handleSearchFiltering}
                id="default"
                className="shadow appearance-none border border-gray-300 text-gray-700 text-sm rounded focus:ring-red-400 focus:border-red-400 block w-full py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option className="hover:bg-red-400" value="default">
                  Select Name
                </option>
                {AllCoursesData.length &&
                  AllCoursesData.map((item, index) => (
                    <option key={index} value={item?.name}>
                      {item?.name}
                    </option>
                  ))}
              </select>
              <div className="relative">
                <input
                  type="date"
                  className="shadow appearance-none py-3 border
                   border-gray-300 text-gray-700
                     sm:text-sm rounded focus:ring-red-400 
                     focus:border-red-400 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="From date"
                />
              </div>
              <div className="relative">
                <input
                  type="date"
                  className="shadow appearance-none py-3 border
                     border-gray-300 text-gray-700 
                     sm:text-sm rounded focus:ring-red-400 
                     focus:border-red-400 block w-full p-2.5  
                     dark:bg-gray-700 dark:border-gray-600 
                     dark:placeholder-gray-400 dark:text-white
                      dark:focus:ring-blue-500 
                      dark:focus:border-blue-500"
                  placeholder="End date"
                />
              </div>

              <br />
            </form>
          </div>
        </div>
        {/* Review */}
        <div>
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium pt-5">
            Review Rate
          </h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                onChange={() => handleFilterNum(5)}
                name="default-radio"
                id="cat-5"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-5"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                <ReactStars
                  size={20}
                  color="gray"
                  activeColor="red"
                  edit={false}
                  value={5}
                />
              </label>
              <div className="ml-auto text-gray-600 text-sm">(5)</div>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                onChange={() => handleFilterNum(4)}
                name="default-radio"
                id="cat-4"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-4"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                <ReactStars
                  size={20}
                  color="gray"
                  activeColor="red"
                  edit={false}
                  value={4}
                />
              </label>
              <div className="ml-auto text-gray-600 text-sm">(4)</div>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                onChange={() => handleFilterNum(3)}
                name="default-radio"
                id="cat-3"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-3"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                <ReactStars
                  size={20}
                  color="gray"
                  activeColor="red"
                  edit={false}
                  value={3}
                />
              </label>
              <div className="ml-auto text-gray-600 text-sm">(3)</div>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                onChange={() => handleFilterNum(2)}
                name="default-radio"
                id="cat-2"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-2"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                <ReactStars
                  size={20}
                  color="gray"
                  activeColor="red"
                  edit={false}
                  value={2}
                />
              </label>
              <div className="ml-auto text-gray-600 text-sm">(2)</div>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                onChange={() => handleFilterNum(1)}
                name="default-radio"
                id="cat-1"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-1"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                <ReactStars
                  size={20}
                  color="gray"
                  activeColor="red"
                  edit={false}
                  value={1}
                />
              </label>
              <div className="ml-auto text-gray-600 text-sm">(1)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
