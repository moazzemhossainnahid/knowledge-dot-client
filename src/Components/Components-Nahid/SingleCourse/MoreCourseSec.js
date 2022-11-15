import React from 'react';
import useCourses from '../../../Apis/useCourses';
import MoreCoursesDetails from './MoreCoursesDetails';

const MoreCourseSec = ({ course }) => {
    const { Courses } = useCourses();
    const matchedCategories = Courses?.filter(crc => crc?.category === course?.category);
    const disMatchId = matchedCategories?.filter(cr => cr?._id !== course?._id);

    // console.log(matchedCategories);
    // console.log(disMatchId);

    return (
        disMatchId?.length > 0 && <div className='py-10'>
            <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-center font-display py-7">More Courses You Might Like</h3>
            <div className='w-[70px] mx-auto h-[3px] bg-[#1584f3] mb-10 relative '>
                <div className='radiant bg-[#FFFFFF]'></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
                {
                    disMatchId && disMatchId?.map(matchCrc => <MoreCoursesDetails course={matchCrc} />)
                }
            </div>
        </div>
    );
};

export default MoreCourseSec;