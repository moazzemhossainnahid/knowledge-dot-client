import React from 'react';

const PopulerCoursesDetails = (data, idx) => {
    return (
        <div className='text-center w-full mx-auto' key={idx}>
            <img className='w-20 h-20' src={data?.icon} alt="" />
            <h3 className="text-2xl font-bold">{data?.title}</h3>
            <p className="text-xl text-orange-500">{data?.course}</p>
        </div>
    );
};

export default PopulerCoursesDetails;