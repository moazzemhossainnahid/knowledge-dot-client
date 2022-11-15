import React from 'react';
import useCourses from '../../../Apis/useCourses';
import MoreCoursesDetails from './MoreCoursesDetails';

const MoreCourseSec = ({ course }) => {
    const { Courses } = useCourses();
    const matchedCategories = Courses?.filter(crc => crc?.category === course?.category);

    // console.log(matchedCategories);
    return (
        <div className='py-10'>
            <h3 className="text-2xl font-bold text-center">More courses you might like</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
                {
                    matchedCategories?.length && matchedCategories?.map(matchCrc => <MoreCoursesDetails course={matchCrc} />)
                }
            </div>
        </div>
    );
};

export default MoreCourseSec;