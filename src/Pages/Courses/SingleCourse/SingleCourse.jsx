import React from 'react';
import { useParams } from 'react-router-dom';
import MoreCourseSec from '../../../Components/Components-Nahid/SingleCourse/MoreCourseSec';
import TabSec from '../../../Components/Components-Nahid/SingleCourse/TabSec';
import TopVideoSec from '../../../Components/Components-Nahid/SingleCourse/TopVideoSec';

const SingleCourse = () => {
    const {id} = useParams();
    
    console.log(id);
    return (
        <div className='container w-full px-5 mx-auto py-20'>
            <TopVideoSec/>
            <TabSec/>
            <MoreCourseSec/>
        </div>   
    );
};

export default SingleCourse;