import { faBook, faInr, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const MoreCoursesDetails = ({ course }) => {
    const navigate = useNavigate();
    console.log(course);
    const ratings = Math.ceil(course?.rating?.total_rating / course?.rating?.total_people);

    return (
        <div key={course?._id} onClick={() => navigate(`/course/${course?._id}`)} class="card cursor-pointer group w-full overflow-hidden bg-base-100 shadow-xl hover:text-white hover:bg-gradient-to-tr from-[#090909bb] to-[#0000008f] bg-cover bg-center duration-300">
            <div class="card-actions justify-end absolute top-5 right-2">
                <div class="badge badge-primary px-3 py-2"><FontAwesomeIcon icon={faInr} /> {course?.price} </div>
            </div>
            <figure><img className='group-hover:scale-[4] group-hover:mix-blend-overlay  duration-300' src={course?.thumbimg} alt="Shoes" /></figure>
            <div class="card-body bg-cover bg-center z-10">
                <div className="w-full rounded mx-auto -mt-16 p-3 group-hover:bg-[#18181862] bg-base-100 shadow-lg">
                    <h2 class="card-title">{course?.name?.slice(0, 30)}</h2>
                    <p className='flex items-center justify-between gap-2'>
                        <div className="flex items-center gap-2">
                            <span className="text-md font-bold text-gray-600"> {ratings} </span>
                            <div class="rating">
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
                        </div>

                        <span className="text-md"> ({course?.rating?.total_people} Rating) </span>
                    </p>
                </div>
                <div class="card-actions flex-col mx-auto gap-3 justify-center py-7">
                    <div className="flex items-center justify-center gap-3 group-hover:text-white">
                        <FontAwesomeIcon icon={faBook} />
                        <h3 className="text-md">{course?.files?.length} Lessons</h3>
                    </div>
                    <div className="flex items-center justify-center gap-3 group-hover:text-white">
                        <FontAwesomeIcon icon={faUser} />
                        <h3 className="text-md">23 Students</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreCoursesDetails;