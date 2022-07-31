import React from 'react';
import { PopulerCoursesData } from '../../Data/PopulerCoursesData';

const PopulerCourses = () => {
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
                            {
                                PopulerCoursesData.map((data, idx) => {
                                    return (
                                        <div key={idx} class="card rounded hover:rounded-md mx-5 group w-full bg-base-100 shadow-xl hover:text-white hover:bg-gradient-to-tr from-[#090909bb] to-[#0000008f] bg-cover bg-center duration-300">
                                            <div class="card-actions justify-end absolute top-5 right-2">
                                                <div class="badge bg-blue-500 px-3 py-2">${data?.price}</div>
                                            </div>
                                            <figure><img className='group-hover:scale-[4] group-hover:mix-blend-overlay  duration-300' src={data?.img} alt="Shoes" /></figure>
                                            <div class="card-body bg-cover bg-center z-10">
                                                <div className="w-full mx-auto -mt-16 p-3 group-hover:bg-[#18181862] bg-base-100 shadow-lg">
                                                    <h2 class="card-title">{data?.title}</h2>
                                                    <p className='flex items-center justify-center gap-2'>
                                                        <div class="rating">
                                                            <input type="radio" name="rating-2" class="mask w-3 h-3 mask-star-2 bg-orange-400" />
                                                            <input type="radio" name="rating-2" class="mask w-3 h-3 mask-star-2 bg-orange-400" checked />
                                                            <input type="radio" name="rating-2" class="mask w-3 h-3 mask-star-2 bg-orange-400" />
                                                            <input type="radio" name="rating-2" class="mask w-3 h-3 mask-star-2 bg-orange-400" />
                                                            <input type="radio" name="rating-2" class="mask w-3 h-3 mask-star-2 bg-orange-400" />
                                                        </div>
                                                        <span className="text-sm"> 4.0 (1 rating) </span>
                                                    </p>
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