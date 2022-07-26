import React from 'react';
import MoreCourseSec from './MoreCourseSec';
import TabSec from './TabSec';
import TopVideoSec from './TopVideoSec';

const SingleCourse = () => {
    return (
        <div className='container w-full px-5 mx-auto py-20'>
            <TopVideoSec/>
            <TabSec/>
            <MoreCourseSec/>
        </div>
    );
};

export default SingleCourse;