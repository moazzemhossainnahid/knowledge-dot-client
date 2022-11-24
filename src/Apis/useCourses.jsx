import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import BaseURL from '../Hooks/BaseURL';
import Loading from '../Pages/SharedPages/Loading';

const useCourses = () => {
    const [Courses, setCourses] = useState();
    const { data: AllCoursesData, isLoading } = useQuery(["AllCoursesData"], () =>
        BaseURL.get(`/api/v1/courses/?sort=-price`)
    );

    console.log(AllCoursesData);

    useEffect(() => {
        setCourses(AllCoursesData && AllCoursesData?.data?.data?.result);
    }, [AllCoursesData])

    if (isLoading) {
        return <Loading />;
    };

    // console.log(Courses);

    return {Courses};
};

export default useCourses;