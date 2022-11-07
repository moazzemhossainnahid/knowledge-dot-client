import React from "react";
import ReactStars from "react-rating-stars-component";
import { CoursesCategoryData } from "../Data/CoursesCategoryData";
const Sidebar = ({
  handleSearchFiltering,
  handleFilterNum,
}) => {
  return (
    <div className=" bg-white px-4 pb-6 mt-3 shadow-lg border rounded-md overflow-hidden">
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
                placeholder="Find By Name" />
            </form>
          </div>
        </div>
        {/* Category */}
        <div className="flex items-center">
          <div class="accordion pt-3" id="accordionExample5">
            <div class="accordion-item bg-white ">
              <h2 class="accordion-header mb-0" id="headingOne5">
                <button class=" accordion-button relative flex justify-between font-bold items-center w-full py-4 px-5 text-xl text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true"
                  aria-controls="collapseOne5">
                  <span className="text-gray-600 pr-32">Category</span>
                </button>
              </h2>
              <div id="collapseOne5" class="accordion-collapse collapse show" aria-labelledby="headingOne5">
                <div class="accordion-body py-4 px-5">
                  <div class="flex justify-center">
                    <div>
                      {
                        CoursesCategoryData.map(course => (
                          <div class="form-check w-full flex justify-between items-center py-1 gap-2">
                            <div className="pr-10">
                              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
                              <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                {course.name}
                              </label>
                            </div>
                            <h3 className="text-gray-500 font-semibold">(15)</h3>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Review */}
        <div className="flex items-center">
          <div class="accordion pt-3" id="accordionExample5">
            <div class="accordion-item bg-white ">
              <h2 class="accordion-header mb-0" id="headingOne5">
                <button class=" accordion-button relative flex justify-between font-bold items-center w-full py-4 px-5 text-xl text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true"
                  aria-controls="collapseOne5">
                  <span className="text-gray-600 pr-32">Ratings</span>
                </button>
              </h2>
              <div id="collapseOne5" class="accordion-collapse collapse show" aria-labelledby="headingOne5">
                <div class="accordion-body py-4 px-5">
                  <div class="flex justify-center">
                    <div>
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
                          <div className="ml-auto pl-10 text-gray-600 text-sm">(5)</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;