import React from 'react';
import { PopulerCoursesData } from '../../Data/PopolerCoursesData';
import PopulerCoursesDetails from './PopulerCoursesDetails';

const PopulerCourses = () => {
    return (
        <div className='py-20 text-center'>
            <h3 className="font-semibold font-mono text-xl py-2 tracking-widest text-orange-500">POPULAR CATEGORY</h3>
            <h3 className="font-bold font-sans text-2xl md:text-3xl lg:text-4xl py-2  text-gray-700">Popular Category For Learn</h3>
            <div className="container p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 w-full mx-auto">
                {
                    PopulerCoursesData.map((data, idx) => {
                        return (
                            <div className='text-center cursor-pointer hover:-mt-7 duration-300 rounded p-5 shadow-md gap-5 w-full mx-auto' key={idx}>
                                <img className='w-20 h-20 mx-auto' src={data?.icon} alt="" />
                                <h3 className="text-xl py-2 font-semibold font-sans">{data?.title}</h3>
                                <p className="text-xl text-orange-500">{data?.course} Course</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default PopulerCourses;