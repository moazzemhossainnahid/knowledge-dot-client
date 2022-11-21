import { faBook, faInr, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCourses from '../../../../Apis/useCourses';

const PopulerCourses = () => {
    const {Courses} = useCourses();
    const navigate = useNavigate();

    const Populer = Courses?.filter(course => course?.rating?.total_rating / course?.rating?.total_people > 3.50);

    console.log(Populer);
    return (
        <div>
            <div className='py-10'>
                <h3 className="text-2xl py-10 font-bold text-center">Populer Courses</h3>
                <div className='w-[70px] mx-auto h-[3px] bg-[#1584f3] mb-10 relative '>
                    <div className='radiant bg-[#FFFFFF]'></div>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-5 justify-center text-center px-2 md:px-5 lg:px-7">
                    <div className="w-full md:w-2/6 mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold py-2 ">Check out our most popular courses</h3>
                        <p className="">With our growing catalog of over 30 Nanodegree programs from beginner to advanced, you're sure to find one that fits your career goals</p>
                        <img className='object-cover mx-auto p-10' src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/08/signature.png" alt="" />
                    </div>
                    <div className="w-full md:w-4/6 mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                            {
                                Populer?.map((course) => {
                                    const ratings = Math.ceil(course?.rating?.total_rating / course?.rating?.total_people);
                                    return (
                                        <div key={course?._id} onClick={() => navigate(`/course/${course?._id}`)} class="card cursor-pointer group w-full overflow-hidden bg-base-100 shadow-xl hover:text-white hover:bg-gradient-to-tr from-[#090909bb] to-[#0000008f] bg-cover bg-center duration-300">
                                        <div class="card-actions justify-end absolute top-5 right-2">
                                            <div class="badge badge-primary px-3 py-2"><FontAwesomeIcon icon={faInr} /> {course?.price} </div>
                                        </div>
                                        <figure><img className='group-hover:scale-[4] group-hover:mix-blend-overlay  duration-300' src={course?.thumbimg} alt="Shoes" /></figure>
                                        <div class="card-body bg-cover bg-center z-10">
                                            <div className="w-full rounded mx-auto -mt-16 p-3 group-hover:bg-[#18181862] bg-base-100 shadow-lg">
                                                <h2 class="text-md font-bold">{course?.name?.slice(0, 30)}</h2>
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
                            
                                                    <span className="text-xs flex"> ({course?.rating?.total_people} Rating) </span>
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
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopulerCourses;