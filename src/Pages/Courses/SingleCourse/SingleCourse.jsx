import React from 'react';
import { useParams } from 'react-router-dom';
import useCourses from '../../../Apis/useCourses';
import MoreCourseSec from '../../../Components/Components-Nahid/SingleCourse/MoreCourseSec';
import TabSec from '../../../Components/Components-Nahid/SingleCourse/TabSec';
import TopVideoSec from '../../../Components/Components-Nahid/SingleCourse/TopVideoSec';

const SingleCourse = () => {
    const {id} = useParams();
    const {Courses} = useCourses();

    const course = Courses?.find(course => course._id === id);
    // console.log(course);

    return (
        <div className='container w-full px-5 mx-auto py-20'>
            <TopVideoSec course={course} />
            <TabSec  course={course} />
            <MoreCourseSec  course={course} />
        </div>   
    );
};

export default SingleCourse;