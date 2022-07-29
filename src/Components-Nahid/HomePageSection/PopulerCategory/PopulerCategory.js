import React from 'react';
import { PopulerCategoryData } from '../../Data/PopulerCategoryData';

const PopulerCategory = () => {
    return (
        <div className='py-20 text-center'>
            <h3 className="font-semibold font-mono text-xl py-2 tracking-widest text-orange-500">POPULAR CATEGORY</h3>
            <div className='w-[70px] mx-auto h-[3px] bg-[#1584f3] relative '>
            <div className='radiant bg-[#FFFFFF]'></div>
        </div>
            <h3 className="font-bold font-sans text-2xl md:text-3xl lg:text-4xl py-2  text-gray-700">Popular Category For Learn</h3>
            <div className="container p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 w-full mx-auto">
                {
                    PopulerCategoryData.map((data, idx) => {
                        return (
                            <div className='text-center group cursor-pointer hover:-mt-7 duration-300 rounded p-5 shadow-md gap-5 w-full mx-auto' key={idx}>
                                <img className='w-20 h-20 mx-auto' src={data?.icon} alt="" />
                                <h3 className="text-xl py-2 font-semibold font-sans">{data?.title}</h3>
                                <p className="text-xl group-hover:text-green-700 text-orange-500">{data?.course} Course</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default PopulerCategory;